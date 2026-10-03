import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RotateCcw, Home } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

/**
 * Application-wide ErrorBoundary for graceful error resilience.
 * Catches uncaught runtime exceptions in the component tree, displays
 * a reassuring branded fallback interface, and prevents raw stack trace leakage.
 */
export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // Only log diagnostic information in non-production environments
    if (import.meta.env.DEV) {
      console.error('ErrorBoundary caught an unhandled error:', error, errorInfo);
    }
  }

  private handleReset = (): void => {
    this.setState({ hasError: false, error: null });
    window.location.href = '/';
  };

  private handleReload = (): void => {
    window.location.reload();
  };

  public render(): ReactNode {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div 
          role="alert"
          className="min-h-screen flex items-center justify-center bg-[#FCFAF7] px-4 sm:px-6 py-12 text-[#22201D]"
        >
          <div className="max-w-md w-full bg-white border border-[#E8E1D5] rounded-xs p-8 shadow-md text-center space-y-5">
            <div className="w-12 h-12 rounded-full bg-[#FAF3F0] border border-[#F2D6CC] text-[#9B5D43] flex items-center justify-center mx-auto">
              <AlertTriangle className="w-6 h-6" />
            </div>

            <div className="space-y-2">
              <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1917]">
                Something Went Wrong
              </h1>
              <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                We encountered an unexpected problem while loading this section. Please try refreshing the page or navigating back to our home showroom.
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                type="button"
                onClick={this.handleReload}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#1C1917] hover:bg-[#342D28] text-white text-xs font-semibold rounded-xs transition-colors shadow-xs"
              >
                <RotateCcw className="w-3.5 h-3.5 text-[#DDD4C5]" />
                <span>Reload Page</span>
              </button>

              <button
                type="button"
                onClick={this.handleReset}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#F6F3ED] hover:bg-[#EBE5DB] text-[#1C1917] border border-[#DDD4C5] text-xs font-semibold rounded-xs transition-colors"
              >
                <Home className="w-3.5 h-3.5 text-[#704834]" />
                <span>Back to Home</span>
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

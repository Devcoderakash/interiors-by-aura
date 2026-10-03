import re
import sys

def replace_buttons(content):
    # Pattern to find the navigation buttons and replace them with anchor tags
    # This is a bit tricky with regex, so we'll do it manually.
    lines = content.split('\n')
    new_lines = []
    i = 0
    while i < len(lines):
        line = lines[i]
        if "<button" in line and "nav-link-" in line:
            new_lines.append(line.replace("<button", "<a").replace("nav-link-", "nav-link-"))
            while i < len(lines):
                i += 1
                line = lines[i]
                if "onClick={() => handleNavClick(" in line:
                    match = re.search(r"handleNavClick\('([^']+)'(?:, '([^']+)')?\)", line)
                    if match:
                        page = match.group(1)
                        href = '/' if page == 'home' else f'/{page}'
                        new_lines.append(line.replace("onClick={() => handleNavClick", f"href=\"{href}\"\n              onClick={(e) => {{ e.preventDefault(); handleNavClick"))
                        new_lines[-1] = new_lines[-1].replace(")}", "); }}")
                        break
        elif "</button>" in line and ("Home" in line or "Furniture" in line or "Doors" in line or "Gallery" in line or "About" in line or "Contact" in line) and "nav-link-" in new_lines[-1]:
            # Actually, </button> might be on a different line, we'll just use simple replace for the file.
            pass
        
        new_lines.append(line)
        i += 1
    
    return '\n'.join(new_lines)

with open('src/components/Navbar.tsx', 'r') as f:
    content = f.read()

# Replace desktop links
content = re.sub(
    r'<button\s+id="nav-link-home"\s+onClick=\{\(\) => handleNavClick\(\'home\'\)\}',
    r'<a href="/" id="nav-link-home" onClick={(e) => { e.preventDefault(); handleNavClick(\'home\'); }}',
    content
)
content = re.sub(
    r'<button\s+id="nav-link-furniture"\s+onClick=\{\(\) => handleNavClick\(\'products\', \'Living Room\'\)\}',
    r'<a href="/products" id="nav-link-furniture" onClick={(e) => { e.preventDefault(); handleNavClick(\'products\', \'Living Room\'); }}',
    content
)
content = re.sub(
    r'<button\s+id="nav-link-doors"\s+onClick=\{\(\) => handleNavClick\(\'doors\', \'Doors\'\)\}',
    r'<a href="/doors" id="nav-link-doors" onClick={(e) => { e.preventDefault(); handleNavClick(\'doors\', \'Doors\'); }}',
    content
)
content = re.sub(
    r'<button\s+id="nav-link-gallery"\s+onClick=\{\(\) => handleNavClick\(\'gallery\'\)\}',
    r'<a href="/gallery" id="nav-link-gallery" onClick={(e) => { e.preventDefault(); handleNavClick(\'gallery\'); }}',
    content
)
content = re.sub(
    r'<button\s+id="nav-link-about"\s+onClick=\{\(\) => handleNavClick\(\'about\'\)\}',
    r'<a href="/about" id="nav-link-about" onClick={(e) => { e.preventDefault(); handleNavClick(\'about\'); }}',
    content
)
content = re.sub(
    r'<button\s+id="nav-link-contact"\s+onClick=\{\(\) => handleNavClick\(\'contact\'\)\}',
    r'<a href="/contact" id="nav-link-contact" onClick={(e) => { e.preventDefault(); handleNavClick(\'contact\'); }}',
    content
)

# Mobile links
content = re.sub(
    r'<button\s+id="mobile-nav-home"\s+onClick=\{\(\) => handleNavClick\(\'home\'\)\}',
    r'<a href="/" id="mobile-nav-home" onClick={(e) => { e.preventDefault(); handleNavClick(\'home\'); }}',
    content
)
content = re.sub(
    r'<button\s+id="mobile-nav-furniture"\s+onClick=\{\(\) => handleNavClick\(\'products\', \'Living Room\'\)\}',
    r'<a href="/products" id="mobile-nav-furniture" onClick={(e) => { e.preventDefault(); handleNavClick(\'products\', \'Living Room\'); }}',
    content
)
content = re.sub(
    r'<button\s+id="mobile-nav-doors"\s+onClick=\{\(\) => handleNavClick\(\'doors\', \'Doors\'\)\}',
    r'<a href="/doors" id="mobile-nav-doors" onClick={(e) => { e.preventDefault(); handleNavClick(\'doors\', \'Doors\'); }}',
    content
)
content = re.sub(
    r'<button\s+id="mobile-nav-gallery"\s+onClick=\{\(\) => handleNavClick\(\'gallery\'\)\}',
    r'<a href="/gallery" id="mobile-nav-gallery" onClick={(e) => { e.preventDefault(); handleNavClick(\'gallery\'); }}',
    content
)
content = re.sub(
    r'<button\s+id="mobile-nav-about"\s+onClick=\{\(\) => handleNavClick\(\'about\'\)\}',
    r'<a href="/about" id="mobile-nav-about" onClick={(e) => { e.preventDefault(); handleNavClick(\'about\'); }}',
    content
)
content = re.sub(
    r'<button\s+id="mobile-nav-contact"\s+onClick=\{\(\) => handleNavClick\(\'contact\'\)\}',
    r'<a href="/contact" id="mobile-nav-contact" onClick={(e) => { e.preventDefault(); handleNavClick(\'contact\'); }}',
    content
)

# Replace closing tags conditionally
for word in ["Home", "Furniture", "Doors", "Gallery", "About", "Contact"]:
    content = re.sub(rf'{word}\n\s*</button>', rf'{word}\n            </a>', content)
    content = re.sub(rf'{word}\n\s*</button>', rf'{word}\n              </a>', content) # Mobile indentation

# Also replace the main brand logo button
content = re.sub(
    r'<button\s+id="brand-logo-btn"\s+onClick=\{\(\) => handleNavClick\(\'home\'\)\}',
    r'<a href="/" id="brand-logo-btn" onClick={(e) => { e.preventDefault(); handleNavClick(\'home\'); }}',
    content
)
content = re.sub(r'<Logo variant="dark" />\n\s*</button>', r'<Logo variant="dark" />\n          </a>', content)

with open('src/components/Navbar.tsx', 'w') as f:
    f.write(content)

print("Navbar updated")

# Now update Footer.tsx
with open('src/components/Footer.tsx', 'r') as f:
    content = f.read()

content = re.sub(
    r'<button\s+onClick=\{\(\) => handleNav\(\'home\'\)\}',
    r'<a href="/" onClick={(e) => { e.preventDefault(); handleNav(\'home\'); }}',
    content
)
content = re.sub(
    r'<button\s+onClick=\{\(\) => handleNav\(\'products\', \'Living Room\'\)\}',
    r'<a href="/products" onClick={(e) => { e.preventDefault(); handleNav(\'products\', \'Living Room\'); }}',
    content
)
content = re.sub(
    r'<button\s+onClick=\{\(\) => handleNav\(\'doors\', \'Doors\'\)\}',
    r'<a href="/doors" onClick={(e) => { e.preventDefault(); handleNav(\'doors\', \'Doors\'); }}',
    content
)
content = re.sub(
    r'<button\s+onClick=\{\(\) => handleNav\(\'gallery\'\)\}',
    r'<a href="/gallery" onClick={(e) => { e.preventDefault(); handleNav(\'gallery\'); }}',
    content
)
content = re.sub(
    r'<button\s+onClick=\{\(\) => handleNav\(\'about\'\)\}',
    r'<a href="/about" onClick={(e) => { e.preventDefault(); handleNav(\'about\'); }}',
    content
)
content = re.sub(
    r'<button\s+onClick=\{\(\) => handleNav\(\'contact\'\)\}',
    r'<a href="/contact" onClick={(e) => { e.preventDefault(); handleNav(\'contact\'); }}',
    content
)

content = re.sub(r'Home\n\s*</button>', r'Home\n                </a>', content)
content = re.sub(r'Furniture Collection\n\s*</button>', r'Furniture Collection\n                </a>', content)
content = re.sub(r'Door Designs & Sizing\n\s*</button>', r'Door Designs & Sizing\n                </a>', content)
content = re.sub(r'Showroom Gallery\n\s*</button>', r'Showroom Gallery\n                </a>', content)
content = re.sub(r'About Us\n\s*</button>', r'About Us\n                </a>', content)
content = re.sub(r'Contact & Map\n\s*</button>', r'Contact & Map\n                </a>', content)

with open('src/components/Footer.tsx', 'w') as f:
    f.write(content)

print("Footer updated")


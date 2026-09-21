import os
import math
from PIL import Image, ImageDraw, ImageFont, ImageFilter

def create_gradient_badge(size=512, corner_radius=115):
    # Create high-res canvas with supersampling for crisp edges
    scale = 2
    actual_size = size * scale
    radius = corner_radius * scale
    
    img = Image.new("RGBA", (actual_size, actual_size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    
    # Generate gradient: top-left (37, 99, 235) #2563eb to bottom-right (79, 70, 229) #4f46e5
    c1 = (37, 99, 235)
    c2 = (79, 70, 229)
    
    gradient = Image.new("RGBA", (actual_size, actual_size))
    grad_draw = ImageDraw.Draw(gradient)
    
    for y in range(actual_size):
        for x in range(actual_size):
            factor = (x + y) / (2 * actual_size)
            r = int(c1[0] + factor * (c2[0] - c1[0]))
            g = int(c1[1] + factor * (c2[1] - c1[1]))
            b = int(c1[2] + factor * (c2[2] - c1[2]))
            gradient.putpixel((x, y), (r, g, b, 255))
            
    # Mask with rounded rectangle
    mask = Image.new("L", (actual_size, actual_size), 0)
    mask_draw = ImageDraw.Draw(mask)
    mask_draw.rounded_rectangle([(0, 0), (actual_size - 1, actual_size - 1)], radius=radius, fill=255)
    
    # Apply mask
    badge = Image.new("RGBA", (actual_size, actual_size), (0, 0, 0, 0))
    badge.paste(gradient, (0, 0), mask)
    
    # Draw text "SR"
    # Find font
    font_size = int(actual_size * 0.44)
    font = None
    for font_path in ["C:/Windows/Fonts/segoeuib.ttf", "C:/Windows/Fonts/arialbd.ttf"]:
        if os.path.exists(font_path):
            font = ImageFont.truetype(font_path, font_size)
            break
            
    if font:
        b_draw = ImageDraw.Draw(badge)
        text = "SR"
        bbox = b_draw.textbbox((0, 0), text, font=font)
        tw = bbox[2] - bbox[0]
        th = bbox[3] - bbox[1]
        
        tx = (actual_size - tw) // 2 - bbox[0]
        ty = (actual_size - th) // 2 - bbox[1]
        
        # Subtle shadow
        b_draw.text((tx, ty + 8 * scale), text, font=font, fill=(15, 23, 42, 80))
        # Crisp white text
        b_draw.text((tx, ty), text, font=font, fill=(255, 255, 255, 255))
        
    # Resize down with high quality filter
    final_img = badge.resize((size, size), Image.Resampling.LANCZOS)
    return final_img

def generate_favicons(out_dir):
    os.makedirs(out_dir, exist_ok=True)
    
    badge_512 = create_gradient_badge(512, corner_radius=115)
    badge_512.save(os.path.join(out_dir, "android-chrome-512x512.png"))
    
    badge_192 = badge_512.resize((192, 192), Image.Resampling.LANCZOS)
    badge_192.save(os.path.join(out_dir, "android-chrome-192x192.png"))
    
    badge_180 = badge_512.resize((180, 180), Image.Resampling.LANCZOS)
    badge_180.save(os.path.join(out_dir, "apple-touch-icon.png"))
    
    # 48x48 is Google's primary recommended favicon size
    badge_48 = badge_512.resize((48, 48), Image.Resampling.LANCZOS)
    badge_48.save(os.path.join(out_dir, "favicon-48x48.png"))
    
    badge_32 = badge_512.resize((32, 32), Image.Resampling.LANCZOS)
    badge_32.save(os.path.join(out_dir, "favicon-32x32.png"))
    
    badge_16 = badge_512.resize((16, 16), Image.Resampling.LANCZOS)
    badge_16.save(os.path.join(out_dir, "favicon-16x16.png"))
    
    # Save standard favicon.ico containing 16, 32, 48
    ico_img = badge_512.resize((48, 48), Image.Resampling.LANCZOS)
    ico_img.save(
        os.path.join(out_dir, "favicon.ico"),
        format="ICO",
        sizes=[(16, 16), (32, 32), (48, 48)]
    )
    print("Generated all favicon sizes and favicon.ico successfully.")

def create_og_image(out_path):
    w, h = 1200, 630
    img = Image.new("RGBA", (w, h), (11, 16, 27, 255)) # #0B101B
    draw = ImageDraw.Draw(img)
    
    # Add subtle glowing radial or elliptical spots
    glow = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    glow_draw = ImageDraw.Draw(glow)
    
    # Top-right indigo glow
    glow_draw.ellipse([(800, -100), (1350, 450)], fill=(79, 70, 229, 45))
    # Bottom-left blue glow
    glow_draw.ellipse([(-100, 250), (450, 800)], fill=(37, 99, 235, 35))
    glow = glow.filter(ImageFilter.GaussianBlur(80))
    img.paste(glow, (0, 0), glow)
    
    # Add border/inner card glow
    draw = ImageDraw.Draw(img)
    draw.rectangle([(20, 20), (w - 20, h - 20)], outline=(30, 41, 59, 180), width=1)
    
    # Badge (Logo)
    badge = create_gradient_badge(size=140, corner_radius=32)
    img.paste(badge, (80, 80), badge)
    
    # Brand Name next to logo
    font_bold = "C:/Windows/Fonts/segoeuib.ttf"
    font_reg = "C:/Windows/Fonts/segoeui.ttf"
    
    f_title = ImageFont.truetype(font_bold, 54)
    f_sub = ImageFont.truetype(font_reg, 24)
    f_badge = ImageFont.truetype(font_bold, 20)
    f_h1 = ImageFont.truetype(font_bold, 56)
    f_h2 = ImageFont.truetype(font_reg, 30)
    f_stat_val = ImageFont.truetype(font_bold, 36)
    f_stat_lbl = ImageFont.truetype(font_reg, 20)
    
    # StartRus text
    draw.text((250, 95), "Start", font=f_title, fill=(255, 255, 255, 255))
    draw.text((380, 95), "Rus", font=f_title, fill=(59, 130, 246, 255)) # blue-500
    draw.text((252, 165), "INDIVIDUAL RUS TILI TA'LIMI", font=f_badge, fill=(148, 163, 184, 255))
    
    # Main Headline
    draw.text((80, 260), "Rus tilida erkin va to'g'ri so'zlashish", font=f_h1, fill=(255, 255, 255, 255))
    draw.text((80, 335), "1-ga-1 individual darslar | Toshkent", font=f_h2, fill=(96, 165, 250, 255))
    
    # Divider line
    draw.line([(80, 410), (1120, 410)], fill=(51, 65, 85, 200), width=2)
    
    # 3 Feature Pills
    features = [
        ("5+ yil tajriba", "Hong Kong, Success, Fitrat"),
        ("1-ga-1 darslar", "100% individual e'tibor"),
        ("70% so'zlashuv", "Noldan erkin muloqotgacha")
    ]
    
    x_pos = 80
    for title, desc in features:
        draw.text((x_pos, 440), title, font=f_stat_val, fill=(255, 255, 255, 255))
        draw.text((x_pos, 490), desc, font=f_stat_lbl, fill=(148, 163, 184, 255))
        x_pos += 360
        
    # URL Pill at bottom right
    draw.text((950, 105), "startrus.uz", font=ImageFont.truetype(font_bold, 26), fill=(148, 163, 184, 200))
    
    # Convert RGBA to RGB for JPEG/PNG
    rgb_img = Image.new("RGB", (w, h), (11, 16, 27))
    rgb_img.paste(img, mask=img.split()[3])
    rgb_img.save(out_path, quality=95)
    print(f"Generated OG Image successfully at: {out_path}")

if __name__ == "__main__":
    public_dir = r"d:\Agents\startrus\public"
    generate_favicons(public_dir)
    create_og_image(os.path.join(public_dir, "og-image.png"))

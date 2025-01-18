import qrcode

# URL of your hosted page
url = "https://akj-9.github.io/Klink/"

# Generate the QR code
qr = qrcode.QRCode(
    version=1,
    error_correction=qrcode.constants.ERROR_CORRECT_L,
    box_size=10,
    border=4,
)
qr.add_data(url)
qr.make(fit=True)

# Create and save the QR code image
img = qr.make_image(fill_color="black", back_color="white")
img.save("my_profile_qr.png")

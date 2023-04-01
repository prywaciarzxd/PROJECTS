import argparse
import os
from PIL import Image

def convert_image(input_file, output_file, format):
    try:
        with Image.open(input_file) as im:
            im.save(output_file, format=format)
        print(f"Image converted to {format} format successfully!")
    except OSError:
        print("Cannot convert image file. Please check if the file format is supported.")

def resize_image(input_file, output_file, size):
    try:
        with Image.open(input_file) as im:
            im_resized = im.resize(size)
            im_resized.save(output_file)
        print(f"Image resized successfully to {size}!")
    except OSError:
        print("Cannot resize image file. Please check if the file format is supported.")

def search_files(directory, extension):
    found_files = []
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith(extension):
                found_files.append(os.path.join(root, file))
    if len(found_files) > 0:
        print(f"Found {len(found_files)} files with extension {extension}:")
        for file in found_files:
            print(file)
    else:
        print(f"No files found with extension {extension}.")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Perform various tasks using CLI.")
    parser.add_argument("-c", "--convert", nargs=3, metavar=("input_file", "output_file", "format"), help="Convert an image file to a different format.")
    parser.add_argument("-r", "--resize", nargs=3, metavar=("input_file", "output_file", "size"), help="Resize an image file.")
    parser.add_argument("-s", "--search", nargs=2, metavar=("directory", "extension"), help="Search for files with a specific extension in a directory.")
    args = parser.parse_args()

    if args.convert:
        convert_image(args.convert[0], args.convert[1], args.convert[2])
    elif args.resize:
        size = tuple(map(int, args.resize[2].split(",")))
        resize_image(args.resize[0], args.resize[1], size)
    elif args.search:
        search_files(args.search[0], args.search[1])
    else:
        parser.print_help()

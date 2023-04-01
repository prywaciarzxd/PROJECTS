import os
import shutil

def main():
    print("Welcome to the File Manager")
    while True:
        print("\nPlease select an option:")
        print("1. List files in current directory")
        print("2. Rename a file")
        print("3. Delete a file")
        print("4. Copy a file")
        print("5. Exit")

        choice = input("\nEnter your choice: ")

        if choice == "1":
            list_files()
        elif choice == "2":
            rename_file()
        elif choice == "3":
            delete_file()
        elif choice == "4":
            copy_file()
        elif choice == "5":
            print("Exiting program...")
            break
        else:
            print("Invalid choice, please try again.")

def list_files():
    files = os.listdir(".")
    for file in files:
        print(file)

def rename_file():
    old_name = input("Enter the current file name: ")
    new_name = input("Enter the new file name: ")
    os.rename(old_name, new_name)
    print(f"{old_name} has been renamed to {new_name}")

def delete_file():
    file_name = input("Enter the file name: ")
    os.remove(file_name)
    print(f"{file_name} has been deleted.")

def copy_file():
    src_file = input("Enter the source file name: ")
    dst_file = input("Enter the destination file name: ")
    shutil.copy(src_file, dst_file)
    print(f"{src_file} has been copied to {dst_file}")

if __name__ == "__main__":
    main()

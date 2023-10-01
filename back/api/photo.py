import os
#function to save photos into the folder.
def save_photo(photo_name,photo):
    path = "database/photo"
    if not os.path.exists(path):
        os.makedirs(path)
    photo.save(os.path.join(path,photo_name))
    return photo_name
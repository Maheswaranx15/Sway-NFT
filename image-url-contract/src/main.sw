contract;

storage {
    image_url: str[256] = ""
}

abi ImageUrlContract {
    #[storage(read, write)]
    fn set_image_url(url: str[256]);

    #[storage(read)]
    fn get_image_url() -> str[256];
}

impl ImageUrlContract for Contract {
    #[storage(read, write)]
    fn set_image_url(url: str[256]) {
        storage.image_url.write(url);
    }

    #[storage(read)]
    fn get_image_url() -> str[256] {
        storage.image_url.read()
    }
}

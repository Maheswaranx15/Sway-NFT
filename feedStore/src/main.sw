contract;

storage {
    /// The total number of unique assets minted by this contract.
    total_assets: u64 = 0,
    /// The total supply of coins minted for a particular asset.
    total_supply: StorageMap<AssetId, u64> = StorageMap {},
    /// The name associated with a particular asset.
    name: StorageMap<AssetId, StorageString> = StorageMap {},
    /// The symbol associated with a particular asset.
    symbol: StorageMap<AssetId, StorageString> = StorageMap {},
    /// Storage for image metadata associated with an asset.
    image_metadata: StorageMap<AssetId, StorageString> = StorageMap {},
    /// Storage for video metadata associated with an asset.
    video_metadata: StorageMap<AssetId, StorageString> = StorageMap {},
}

impl Contract {
    /// Sets the image metadata for an asset.
    #[storage(write)]
    fn set_image_metadata(asset: AssetId, image: String) {
        only_owner();

        require(
            storage.image_metadata.get(asset).is_none(),
            SetError::ImageAlreadySet,
        );

        storage.image_metadata.insert(asset, StorageString::from(image));
    }

    /// Sets the video metadata for an asset.
    #[storage(write)]
    fn set_video_metadata(asset: AssetId, video: String) {
        only_owner();

        require(
            storage.video_metadata.get(asset).is_none(),
            SetError::VideoAlreadySet,
        );

        storage.video_metadata.insert(asset, StorageString::from(video));
    }

    /// Retrieves metadata (image or video) for a specific asset by type.
    #[storage(read)]
    fn get_metadata(asset: AssetId, key: String) -> Option<String> {
        match key.as_str() {
            "image" => storage.image_metadata.get(asset).map(|s| s.to_string()),
            "video" => storage.video_metadata.get(asset).map(|s| s.to_string()),
            _ => None,
        }
    }
}

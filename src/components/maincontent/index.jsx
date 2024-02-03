import React from 'react'
import useFetchData from '../../data/useFetchData'

const MainContent = () => {
  const bannerApiUrl = 'https://api.testvalley.kr/main-banner/all'
  const shortcutApiUrl = 'https://api.testvalley.kr/main-shortcut/all'
  const collectionApiUrl =
    'https://api.testvalley.kr/collections?prearrangedDiscount'

  const { data: banners, error: bannersError } = useFetchData(bannerApiUrl)
  const { data: shortcuts, error: shortcutsError } =
    useFetchData(shortcutApiUrl)
  const { data: collections, error: collectionsError } = useFetchData(
    collectionApiUrl,
    {
      type: 'SINGLE',
      viewType: 'TILE'
    }
  )

  if (bannersError || shortcutsError || collectionsError)
    return <p>Error loading data...</p>
  if (!banners || !shortcuts || !collections) return <p>Loading...</p>

  return (
    <div>
      {/* Display banners */}
      {banners.map(banner => (
        <div key={banner.id}>{/* Display banner content */}</div>
      ))}

      {/* Display shortcuts */}
      {shortcuts.map(shortcut => (
        <div key={shortcut.id}>{/* Display shortcut content */}</div>
      ))}

      {/* Display collections */}
      {collections.map(collection => (
        <div key={collection.id}>{/* Display collection content */}</div>
      ))}
    </div>
  )
}

export default MainContent

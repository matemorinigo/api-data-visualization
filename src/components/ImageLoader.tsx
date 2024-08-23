import imageUrl from '../../loader2.ico'

const ImageLoader = () => {
  return (
    <div className="flex justify-center items-center h-auto mt-2">
      <img
        src={imageUrl}
        alt="loading"
        className="animate-spin"
        style={{
          width: 50,
          height: 50,
          animationDuration: `${2}s`,
          animationTimingFunction: 'linear',
        }}
      />
    </div>
  )
}

export default ImageLoader


import {useStore} from '@nanostores/react'
import {uploadConfig, uploadedConfig} from '@/stores/appConfigStore'
import {showUploadConfig} from '@/stores/appConfigStore'

const UploadConfig = () => {
  const uploadedConfigValue = useStore(uploadedConfig)
  return (
    <div className="flex flex-col items-center justify-center gap-y-8 w-full h-full p-8 border rounded-lg absolute top-0 left-0 bg-black/50">
      <div className="flex flex-col items-center w-2/3 justify-center gap-y-8 p-8 border rounded-lg bg-gray-100">
        <div className="text-lg font-bold font-mono uppercase">
          Upload config
        </div>
        <textarea
          rows={10}
          className="w-full h-9/12 bg-white rounded-lg p-2 border border-gray-200"
          value={uploadedConfigValue}
          onChange={(e) => uploadedConfig.set(e.target.value)}
          placeholder="Paste your config here"
        />
        <div className="flex flex-row justify-center items-center gap-x-4">
          <button
            onClick={uploadConfig}
            className="bg-white rounded-lg p-2 border border-gray-200 cursor-pointer"
          >
            Upload
          </button>
          <button
            onClick={() => showUploadConfig.set(false)}
            className="bg-white rounded-lg p-2 border border-gray-200 cursor-pointer"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default UploadConfig

import "@components/loader/loader.comp"

export interface LoaderProps {
  size: Number
  thickness: Number
  priority: string
  negative: boolean
  gray: boolean
  error: boolean
}

export const GrLoaderTemplate = (props: LoaderProps) => {
  const grLoader = document.createElement('gr-loader')

  props.size && grLoader.setAttribute('size', props.size.toString())
  props.thickness && grLoader.setAttribute('thickness', props.thickness.toString())
  props.priority && grLoader.setAttribute('priority', props.priority)
  props.negative && grLoader.setAttribute('negative', '')
  props.gray && grLoader.setAttribute('gray', '')
  props.error && grLoader.setAttribute('error', '')

  return grLoader
}
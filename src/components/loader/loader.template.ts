import "@components/loader/loader"

export interface LoaderProps {
  size: Number
  thickness: Number
  priority: string
  negative: boolean
}

export const GrLoader = (props: LoaderProps) => {
  const grLoader = document.createElement('gr-loader')

  props.size && grLoader.setAttribute('size', props.size.toString())
  props.thickness && grLoader.setAttribute('thickness', props.thickness.toString())
  props.priority && grLoader.setAttribute('priority', props.priority)
  props.negative === true && grLoader.setAttribute('negative', '')

  return grLoader
}
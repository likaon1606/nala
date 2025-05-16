import { useGLTF } from '@react-three/drei'

export default function PugModel(props) {
  const { scene } = useGLTF('/models/pug.glb') // ruta al modelo

  return <primitive object={scene} {...props} />
}

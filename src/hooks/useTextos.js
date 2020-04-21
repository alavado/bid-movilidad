import { useSelector } from "react-redux";

function useTextos() {
  const { textos } = useSelector(state => state.idioma)
  return textos
}

export default useTextos
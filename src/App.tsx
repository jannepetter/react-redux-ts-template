import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux'
import { getStuff } from './reducers/reducer1'

interface Props {
  getStuff: any
  pokemons:any
}

const App: React.FC<Props> = (props) => {
  const dispatch = useDispatch()
  let page='0'

  useEffect(() => {
    dispatch(getStuff(page))
  }, [dispatch,page])
  console.log(props.pokemons,'check')

  return (
    <div >
      Hellou
    </div>
  );
}
const mapDispatchToProps = {
  getStuff
}
const mapStateToProps = (state:any) => {
  return {
    pokemons: state.stuff,
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);

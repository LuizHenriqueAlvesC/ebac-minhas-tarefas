import FiltroCard from '../../components/FiltroCard'
import * as S from './styles'

const BarraLateral = () => (
  <S.Aside>
    <div>
      <S.Campo type="text" placeholder="Buscar" />
      <S.Filtros>
        <FiltroCard legenda="pendentes" contador={1} />
        <FiltroCard legenda="concluidas" contador={2} />
        <FiltroCard legenda="urgente" contador={3} />
        <FiltroCard legenda="importante" contador={4} />
        <FiltroCard legenda="normal" contador={5} />
        <FiltroCard ativo legenda="todas" contador={10} />
      </S.Filtros>
    </div>
  </S.Aside>
)

export default BarraLateral

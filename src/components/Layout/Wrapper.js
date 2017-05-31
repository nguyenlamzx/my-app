import styled from 'styled-components'

import media from './styles/media'

const Wrapper = styled.div`
  padding: ${media.small.padding};

  ${media.medium`
    padding-left: ${media.medium.padding};
    padding-right: ${media.medium.padding};
  `}

  ${media.large`
    padding-left: ${media.large.padding};
    padding-right: ${media.large.padding};
  `}
`

export default Wrapper
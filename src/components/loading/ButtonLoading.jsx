import React from 'react'
import { ButtonLoadingDiv } from './style'

function ButtonLoading() {
  return (
    <ButtonLoadingDiv>
      <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
    </ButtonLoadingDiv>
  )
}

export default ButtonLoading

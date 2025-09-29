import React from 'react'
import InnovationHero from './InnovationHero/InnovationHero'
import InnovationHeroBottom from './InnovationHeroBottom/InnovationHeroBottom'
import InnovationGallery from './InnovationGallery/InnovationGallery'
import SubmitInvention from './SubmitInvention/SubmitInvention'
import EditorsPick from './EditorsPick/EditorsPick'



const Innovation = () => {
  return (
    <div>
        <InnovationHero/>
        <InnovationHeroBottom/>
        <InnovationGallery/>
        <SubmitInvention/>
        <EditorsPick/>
    </div>
  )
}

export default Innovation
import {
  HeroContainer,
  ContentWrapper,
  Title,
  Slogan,
  WrapInput
} from './styles'

export const Home = () => {
  const handleAddressInput = () => {
    console.log('address')
  }

  return (
    <HeroContainer bgimage='/home-hero.webp'>
      <ContentWrapper>
        <div>
          <Title>All We need is Food.</Title>
          <Slogan>Let us start to order food now</Slogan>
          <WrapInput onClick={handleAddressInput} withIcon>
            <p>What is your address?</p>
          </WrapInput>
          <button
            name='find-business'
            onClick={() => console.log('find')}
          >
            Find businesses
          </button>
        </div>
      </ContentWrapper>
    </HeroContainer>
  )
}

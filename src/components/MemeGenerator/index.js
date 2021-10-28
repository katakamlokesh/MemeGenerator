import {Component} from 'react'

import {
  AppContainer,
  Heading,
  MemeGeneratorContainer,
  FormAndMemeContainer,
  MemeContainer,
  TextContent,
  FormContainer,
  LabelElement,
  InputElement,
  SelectElement,
  OptionElement,
  GenerateButton,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here

class MemeGenerator extends Component {
  state = {
    backgroundImageInput: '',
    topTextInput: '',
    bottomTextInput: '',
    optionId: fontSizesOptionsList[0].optionId,
    backgroundImage: '',
    topText: '',
    bottomText: '',
    selectedFontSize: '',
  }

  onChangeBackgroundImage = event => {
    this.setState({backgroundImageInput: event.target.value})
  }

  onChangeTopTextInput = event => {
    this.setState({topTextInput: event.target.value})
  }

  onChangeBottomTextInput = event => {
    this.setState({bottomTextInput: event.target.value})
  }

  onChangeOptionID = event => {
    this.setState({optionId: event.target.value})
  }

  onGenerateMeme = event => {
    event.preventDefault()
    const {
      backgroundImageInput,
      topTextInput,
      bottomTextInput,
      optionId,
    } = this.state
    this.setState({
      backgroundImage: backgroundImageInput,
      topText: topTextInput,
      bottomText: bottomTextInput,
      selectedFontSize: optionId,
    })
  }

  render() {
    const {
      backgroundImage,
      topText,
      bottomText,
      optionId,
      backgroundImageInput,
      topTextInput,
      bottomTextInput,
      selectedFontSize,
    } = this.state

    return (
      <AppContainer>
        <MemeGeneratorContainer>
          <Heading>Meme Generator</Heading>
          <FormAndMemeContainer>
            <MemeContainer data-testid="meme" backgroundImage={backgroundImage}>
              <TextContent selectedFontSize={selectedFontSize}>
                {topText}
              </TextContent>
              <TextContent selectedFontSize={selectedFontSize}>
                {bottomText}
              </TextContent>
            </MemeContainer>
            <FormContainer onSubmit={this.onGenerateMeme}>
              <LabelElement htmlFor="backgroundImageUrl">
                Image URL
              </LabelElement>
              <InputElement
                type="text"
                id="backgroundImageUrl"
                value={backgroundImageInput}
                onChange={this.onChangeBackgroundImage}
                placeholder="Enter the Image URL"
                autoComplete="off"
              />
              <LabelElement htmlFor="topText">Top Text</LabelElement>
              <InputElement
                type="text"
                id="topText"
                value={topTextInput}
                onChange={this.onChangeTopTextInput}
                placeholder="Enter the Top Text"
                autoComplete="off"
              />
              <LabelElement htmlFor="bottomText">Bottom Text</LabelElement>
              <InputElement
                type="text"
                id="bottomText"
                value={bottomTextInput}
                onChange={this.onChangeBottomTextInput}
                placeholder="Enter the Bottom Text"
                autoComplete="off"
              />
              <LabelElement htmlFor="select">Font Size</LabelElement>
              <SelectElement
                id="select"
                value={optionId}
                onChange={this.onChangeOptionID}
              >
                {fontSizesOptionsList.map(eachOption => (
                  <OptionElement
                    key={eachOption.optionId}
                    value={eachOption.optionId}
                  >
                    {eachOption.displayText}
                  </OptionElement>
                ))}
              </SelectElement>
              <GenerateButton type="submit">Generate</GenerateButton>
            </FormContainer>
          </FormAndMemeContainer>
        </MemeGeneratorContainer>
      </AppContainer>
    )
  }
}
export default MemeGenerator

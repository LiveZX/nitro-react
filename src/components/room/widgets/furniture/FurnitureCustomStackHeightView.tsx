import { FC } from 'react';
import ReactSlider from 'react-slider';
import { LocalizeText } from '../../../../api';
import { Button, Column, Flex, NitroCardContentView, NitroCardHeaderView, NitroCardView, Text } from '../../../../common';
import { useFurnitureStackHeightWidget } from '../../../../hooks';

export const FurnitureCustomStackHeightView: FC<{}> = props =>
{
    const { objectId = -1, height = 0, maxHeight = 40, close = null, updateHeight = null, sendUpdate = null } = useFurnitureStackHeightWidget();

    if(objectId === -1) return null;

    return (
        <NitroCardView className="nitro-widget-custom-stack-height" theme="primary-slim">
            <NitroCardHeaderView headerText={ LocalizeText('widget.custom.stack.height.title') } onCloseClick={ close } />
            <NitroCardContentView justifyContent="between">
                <Text>{ LocalizeText('widget.custom.stack.height.text') }</Text>
                <Flex gap={ 2 }>
                    <ReactSlider
                        className="nitro-slider"
                        min={ 0 }
                        max={ maxHeight }
                        step={ 0.01 }
                        value={ height }
                        onChange={ event => updateHeight(event) }
                        renderThumb={ (props, state) => <div { ...props }>{ state.valueNow }</div> } />
                    <input className="show-number-arrows" type="number" min={ 0 } max={ maxHeight } value={ height } onChange={ event => updateHeight(parseFloat(event.target.value)) } />
                </Flex>
                <Column gap={ 1 }>
                    <Button onClick={ event => sendUpdate(-100) }>
                        { LocalizeText('furniture.above.stack') }
                    </Button>
                    <Button onClick={ event => sendUpdate(0) }>
                        { LocalizeText('furniture.floor.level') }
                    </Button>
                </Column>
            </NitroCardContentView>
        </NitroCardView>
    );
}

import React from 'react'
import { 
    Layout, Button, Card, Checkbox, FloatingInput, Icon,
    IconButton
} from 'components'
import { colors } from 'styles'

const style = {
    cardList: {
        display: 'flex',
        alignItems: 'flex-start'
    },
    card: {
        width: '296px',
        marginRight: '36px'
    },
    checklistItem: {
        marginBottom: '22px'
    }
};

const Test = (props) => 
    <Layout>
        <FloatingInput
            style={{ 
                width: '296px',
                marginBottom: '50px' 
            }}
            leftComponent={<Icon name="search" style={{ padding: '0 14px 0 20px' }} color={colors.font.lightGray} />}
            placeholder="Search Notes" 
        />

        <div style={style.cardList}>
            <Card
                style={style.card}
                title="UI Design Tools"
                color={colors.background.blue}
            >
                <Checkbox style={style.checklistItem}>Photoshop</Checkbox>
                <Checkbox style={style.checklistItem}>Inkscape</Checkbox>
                <Checkbox>Sketch</Checkbox>
            </Card>

            <Card
                style={style.card}
                title="Cream Pie Recipe"
                image="http://www.carlsbad-convention.cz/images/gastronomie/04.jpg"
            >
                <Checkbox style={style.checklistItem}>Honey</Checkbox>
                <Checkbox style={style.checklistItem}>Egg Yolk</Checkbox>
                <Checkbox style={style.checklistItem}>Sugar</Checkbox>
                <Checkbox>Olive Oil</Checkbox>
            </Card>

            <Card
                style={style.card}
                title="Weekly Grocery"
                color={colors.background.green}
            >
                <Checkbox style={style.checklistItem}>Avocado</Checkbox>
                <Checkbox style={style.checklistItem}>Tomato</Checkbox>
                <Checkbox style={style.checklistItem}>Ceasar Salad</Checkbox>
                <Checkbox style={style.checklistItem}>2x Tissue</Checkbox>
                <Checkbox>Sunblock</Checkbox>
            </Card>

            <Card
                style={style.card}
                title="Newsletter Draft"
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Phasellus nec maximus nunc. Nullam consequat rhoncus dictum. Pellentesque habitant morbi tristique.
            </Card>
        </div>

        <IconButton
            iconName="search"
            flat
            onClick={() => console.log('IconButton clicked')} 
        />

        <IconButton
            iconName="search"
            onClick={() => console.log('IconButton clicked')} 
        />

        <Button
            style={{ marginBottom: '50px' }}
            onClick={() => console.log('Save clicked')}
        >
            Save
        </Button>

        <Button
            style={{ marginBottom: '50px', marginLeft: '10px' }}
            flat
            onClick={() => console.log('Cancel clicked')}
        >
            Cancel
        </Button>
    </Layout>

export {
    Test
}

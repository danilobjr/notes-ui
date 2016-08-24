import React from 'react'
import { 
    Layout, Button, Card, Checkbox, FloatingInput, Icon,
    IconButton, AppBar, Drawer, DrawerItem
} from 'components'
import { colors } from 'styles'

const style = {
    layout: {
        display: 'flex',
        height: '100vh',
        flexDirection: 'column',
        alignItems: 'center'
    },
    layoutBody: {
        padding: 32
    },
    drawer: {
        height: 'calc(100vh - 64px)',
        top: 64
    },
    floatingSearch: {
        width: 296,
        marginBottom: 32
    },
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
    },
    strikedItem: {
        fontStyle: 'italic',
        color: colors.font.lightGray,
        textDecoration: 'line-through'
    }
};

class Test extends React.Component { 
    constructor(props) {
        super(props);
    
        this.state = {
            textStyle: {},
            menuIsOpen: false
        };
    }

    render() {
        return (
            <div>
                <Layout style={style.layout}>
                    <AppBar appTitle="JS Channel Notes" onToggleMenuClick={this.toggleMenu.bind(this)} />
                    
                    <div style={style.layoutBody}>
                        <Drawer style={style.drawer} open={this.state.menuIsOpen}>
                            <DrawerItem iconName="search" text="Text" onClick={() => console.log('Filter by Notes of type Text')} />
                        </Drawer>

                        <FloatingInput
                            style={style.floatingSearch}
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
                                <Checkbox
                                    onCheck={this.setLineThroughText.bind(this)}
                                    onUncheck={this.setNoStyle.bind(this)}
                                >
                                    <div style={this.state.textStyle}>Sketch</div>
                                </Checkbox>
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
                    </div>
                </Layout>
            </div>
        );
    }

    setLineThroughText() {
        this.setState({ textStyle: style.strikedItem });
    }

    setNoStyle() {
        this.setState({ textStyle: {} });
    }

    toggleMenu() {
        this.setState({ menuIsOpen: !this.state.menuIsOpen });
    }
}

export {
    Test
}

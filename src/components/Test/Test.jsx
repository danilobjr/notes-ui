import React from 'react'
import { Layout, Button, Card, Checkbox, FloatingInput, IconSearch } from 'components'
import { colors } from 'styles'

const Test = (props) => 
    <Layout>
        <Button
            style={{ marginBottom: '50px' }}
            flat
            onClick={() => console.log('Save clicked')}
        >
            Save
        </Button>

        <FloatingInput
            style={{ 
                width: '296px',
                marginBottom: '50px' 
            }}
            leftComponent={<IconSearch style={{ padding: '0 14px 0 20px' }} color={colors.font.lightGray} />}
            placeholder="Search Notes" 
        />

        <Card
            style={{ width: '296px' }}
            title="UI Design Tools"
            color={colors.background.blue}
            image="http://www.carlsbad-convention.cz/images/gastronomie/04.jpg"
            elevation={2}
        >
            <Checkbox>Photoshop</Checkbox>
            <Checkbox>Inkscape</Checkbox>
        </Card>
    </Layout>

export {
    Test
}

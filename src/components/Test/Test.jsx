import React from 'react'
import { Layout, Card, Checkbox } from 'components'
import { colors } from 'styles'

const Test = (props) => 
    <Layout>
        <Card
            title="UI Design Tools"
            color={colors.background.blue}
            image="http://www.carlsbad-convention.cz/images/gastronomie/04.jpg"
            elevation={2}
        >
            <Checkbox label="Photoshop" />
        </Card>
    </Layout>

export {
    Test
}

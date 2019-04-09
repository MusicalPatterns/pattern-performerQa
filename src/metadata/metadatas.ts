import { Metadata } from '@musical-patterns/metadata'

const metadata: Metadata = {
    description: `pattern for qa'ing the performer`,
    formattedName: 'Performer QA',
    mostRecentPublish: process.env.PUBLISH_DATE || '2018-12-19T07:00:00.000Z',
    musicalIdeaIllustrated: 'assure quality of all the things!',
    originalPublish: '2018-12-19T07:00:00.000Z',
    version: process.env.PATTERN_VERSION || 'unknown',
}

const delayMetadata: Metadata = {
    description: `pattern for qa'ing the performer's delay feature`,
    formattedName: 'Performer QA - Delay',
    mostRecentPublish: process.env.PUBLISH_DATE || '2018-04-09T07:00:00.000Z',
    musicalIdeaIllustrated: 'assure quality of delay',
    originalPublish: '2018-04-09T07:00:00.000Z',
    version: process.env.PATTERN_VERSION || 'unknown',
}

export {
    metadata,
    delayMetadata,
}

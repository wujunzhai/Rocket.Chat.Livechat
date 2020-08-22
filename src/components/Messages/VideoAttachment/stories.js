import centered from '@storybook/addon-centered/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { h } from 'preact';

import { VideoAttachment } from '.';
import sampleVideo from '../../../../.storybook/assets/sample-video.mp4';


storiesOf('Messages/VideoAttachment', module)
	.addDecorator(centered)
	.addDecorator(withKnobs)
	.add('default', () => (
		<VideoAttachment
			url={text('url', sampleVideo)}
		/>
	), { loki: { skip: true } });

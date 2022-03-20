import { Card, Flexbox, Text } from './core';
import { Navbar } from './Components';
import { useTheme } from './core/hooks/useTheme';
import { Container } from './Components/Container';
import { useBreakPoints } from './core/hooks/useBreakPoints';

import styled from '@emotion/styled';
import { fade } from './core/utils/fade';

import { useState } from 'react';
import {
  IoImageOutline,
  IoAtSharp,
  IoSendOutline,
  IoEllipsisVertical,
  IoDocumentTextOutline,
  IoBookmarkOutline,
  IoCodeSlash,
  IoBookmark,
  IoLogoGithub,
  IoMenuSharp,
  IoServerOutline,
} from 'react-icons/io5';

import './style.scss';
import { withTheme } from './core/middlewares/withTheme';
import { WriteNodeEditor } from './Components/WriteNodeEditor';

const StyledButton = styled.button`
  padding: 5px;
  border-radius: 10rem;
  border: none;
  cursor: pointer;
  background: ${props => fade(props.theme.palette.primary.main, 0)};
  &:hover {
    background: ${props => fade(props.theme.palette.primary.main, 0.05)};
  }
`;

const Button = withTheme(props => {
  return <StyledButton {...props} />;
});

export default () => {
  const { screen } = useBreakPoints();
  const { switchMode, theme } = useTheme();

  const [html, setHtml] = useState("<div contenteditable='false'></div>");
  return (
    <>
      <Card style={{ borderRadius: 0, minHeight: '100vh', padding: 0 }} bg="background.default">
        <Navbar>
          <Text variant="body2" color="primary.main" style={{ margin: 0 }}>
            Title
          </Text>

          <Text variant="body2" style={{ margin: 0 }}>
            Screen Device: {screen}
          </Text>

          <button onClick={() => switchMode()}>Switch: {theme.palette.mode === 'dark' ? 'light' : 'dark'}</button>
        </Navbar>
        <br />
        <Container style={{ padding: '1rem' }}>
          <WriteNodeEditor />
          <br />
          <Card
            borderColor="divider"
            variant="outlined"
            className={theme => `
          &:hover {
            border-color: ${theme.palette.primary.main};
          }
        `}
          >
            <Text variant="body2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis tristique turpis. Nulla elementum
              feugiat gravida. Nullam quis ultrices nibh. Suspendisse ornare porta neque nec pretium. Cras efficitur,
              turpis quis interdum viverra, neque erat ullamcorper metus, non varius velit sapien sit amet neque. In hac
              habitasse platea dictumst. Morbi lacinia, turpis sit amet interdum tempor, orci neque accumsan ante, sit
              amet mollis lacus ipsum eu sapien. Cras egestas erat dignissim, dapibus quam eu, laoreet nibh. Nulla quis
              aliquet felis, sit amet blandit tellus. Nullam vitae dapibus est, vel luctus erat. Interdum et malesuada
              fames ac ante ipsum primis in faucibus. Proin in sem sit amet ligula aliquam ultricies. Vivamus
              pellentesque consequat elit, quis suscipit diam fermentum eu. Pellentesque ut nisl sagittis, luctus nulla
              ac, accumsan enim. Morbi a suscipit elit. Donec maximus interdum est at volutpat. Ut ipsum lacus,
              condimentum vel mattis quis, hendrerit sed ante. Etiam varius venenatis sapien quis maximus. Suspendisse
              accumsan lacus dui, id pharetra eros commodo a. Vivamus condimentum pulvinar felis nec aliquet. Aenean
              facilisis mi arcu, in pharetra diam pharetra vel. Vestibulum neque justo, tempus vel blandit vitae,
              blandit eu neque. In placerat lectus sit amet lacus lacinia, quis vehicula nisl finibus. Morbi eu auctor
              neque, in dignissim sapien. Nam suscipit nisi id lectus aliquet, sed ultrices sapien bibendum. Aenean
              dignissim consequat tempus. Nunc ut mattis nibh. Pellentesque condimentum, est non molestie molestie,
              ipsum arcu efficitur dui, non dignissim nisi tortor sed augue. Quisque egestas neque lectus, at posuere
              augue elementum ac. Quisque in aliquet libero. Nam vehicula, lectus eget molestie facilisis, nisl libero
              varius mi, sed faucibus turpis odio sed arcu. Mauris elementum tristique arcu ut pharetra. Etiam ultrices
              ante at lacus consequat, id suscipit tortor mattis. Phasellus in malesuada sapien, euismod faucibus erat.
              In id porttitor magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris faucibus tempor
              erat ut varius. In vehicula diam ipsum, eu dapibus mi porttitor et. Duis faucibus ipsum eros, semper
              fringilla dui tempor quis. Nam ac mattis nulla. Etiam sagittis consectetur lacus gravida mattis. Ut
              tincidunt volutpat massa ut tincidunt. Cras massa ex, condimentum a aliquet nec, sodales sed justo. Duis
              nunc mauris, pulvinar et vehicula eget, condimentum sed mi. Aliquam erat volutpat. Quisque dapibus rutrum
              volutpat. Nullam sit amet commodo sapien, semper placerat nulla. Nullam maximus justo sapien, in finibus
              tortor blandit eget. Maecenas vestibulum libero ac consectetur commodo. Donec quis turpis vehicula, tempor
              nibh vel, malesuada ex. Cras sed ante in est luctus semper. In ac pellentesque eros. Proin commodo mi quis
              congue pretium. Sed turpis lacus, fringilla id efficitur in, facilisis at ipsum. Sed mattis nisl sed ante
              faucibus efficitur. Praesent auctor nunc lectus, sit amet placerat neque venenatis ac. Fusce sagittis
              metus odio, ut gravida felis tincidunt sed. Nunc pharetra lectus sed lectus gravida, at cursus nulla
              mattis.
            </Text>
          </Card>
          <br />
          <Card
            borderColor="divider"
            variant="outlined"
            className={theme => `
          &:hover {
            border-color: ${theme.palette.primary.main};
          }
        `}
          >
            <Text variant="body2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis tristique turpis. Nulla elementum
              feugiat gravida. Nullam quis ultrices nibh. Suspendisse ornare porta neque nec pretium. Cras efficitur,
              turpis quis interdum viverra, neque erat ullamcorper metus, non varius velit sapien sit amet neque. In hac
              habitasse platea dictumst. Morbi lacinia, turpis sit amet interdum tempor, orci neque accumsan ante, sit
              amet mollis lacus ipsum eu sapien. Cras egestas erat dignissim, dapibus quam eu, laoreet nibh. Nulla quis
              aliquet felis, sit amet blandit tellus. Nullam vitae dapibus est, vel luctus erat. Interdum et malesuada
              fames ac ante ipsum primis in faucibus. Proin in sem sit amet ligula aliquam ultricies. Vivamus
              pellentesque consequat elit, quis suscipit diam fermentum eu. Pellentesque ut nisl sagittis, luctus nulla
              ac, accumsan enim. Morbi a suscipit elit. Donec maximus interdum est at volutpat. Ut ipsum lacus,
              condimentum vel mattis quis, hendrerit sed ante. Etiam varius venenatis sapien quis maximus. Suspendisse
              accumsan lacus dui, id pharetra eros commodo a. Vivamus condimentum pulvinar felis nec aliquet. Aenean
              facilisis mi arcu, in pharetra diam pharetra vel. Vestibulum neque justo, tempus vel blandit vitae,
              blandit eu neque. In placerat lectus sit amet lacus lacinia, quis vehicula nisl finibus. Morbi eu auctor
              neque, in dignissim sapien. Nam suscipit nisi id lectus aliquet, sed ultrices sapien bibendum. Aenean
              dignissim consequat tempus. Nunc ut mattis nibh. Pellentesque condimentum, est non molestie molestie,
              ipsum arcu efficitur dui, non dignissim nisi tortor sed augue. Quisque egestas neque lectus, at posuere
              augue elementum ac. Quisque in aliquet libero. Nam vehicula, lectus eget molestie facilisis, nisl libero
              varius mi, sed faucibus turpis odio sed arcu. Mauris elementum tristique arcu ut pharetra. Etiam ultrices
              ante at lacus consequat, id suscipit tortor mattis. Phasellus in malesuada sapien, euismod faucibus erat.
              In id porttitor magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris faucibus tempor
              erat ut varius. In vehicula diam ipsum, eu dapibus mi porttitor et. Duis faucibus ipsum eros, semper
              fringilla dui tempor quis. Nam ac mattis nulla. Etiam sagittis consectetur lacus gravida mattis. Ut
              tincidunt volutpat massa ut tincidunt. Cras massa ex, condimentum a aliquet nec, sodales sed justo. Duis
              nunc mauris, pulvinar et vehicula eget, condimentum sed mi. Aliquam erat volutpat. Quisque dapibus rutrum
              volutpat. Nullam sit amet commodo sapien, semper placerat nulla. Nullam maximus justo sapien, in finibus
              tortor blandit eget. Maecenas vestibulum libero ac consectetur commodo. Donec quis turpis vehicula, tempor
              nibh vel, malesuada ex. Cras sed ante in est luctus semper. In ac pellentesque eros. Proin commodo mi quis
              congue pretium. Sed turpis lacus, fringilla id efficitur in, facilisis at ipsum. Sed mattis nisl sed ante
              faucibus efficitur. Praesent auctor nunc lectus, sit amet placerat neque venenatis ac. Fusce sagittis
              metus odio, ut gravida felis tincidunt sed. Nunc pharetra lectus sed lectus gravida, at cursus nulla
              mattis.
            </Text>
          </Card>
        </Container>
      </Card>
    </>
  );
};

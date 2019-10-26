import React, { Component } from 'react';
import { Deck, Appear, Slide, List, ListItem, Notes, Heading, Text, Image } from 'spectacle';
import styled from '@emotion/styled';
import createTheme from 'spectacle/lib/themes/default';
import Unsplash from '../../shared/Unsplash';
import PersonalBackgroundSlide from '../../shared/slides/PersonalBackground';

const Colors = {
  BLUE: '#1BA0E2',
  BLACK: '#222222',
  WHITE: '#ffffff',
};

const theme = createTheme({
  primary: Colors.WHITE,
  code: 'rgb(45,45,45)',
  tv: Colors.BLUE,
}, {
  primary: 'Helvetica, sans-serif',
});

const TextSize = {
  SMALL: 20,
  MEDIUM: 28,
  BIG: 36,
  HUGE: 64,
  MASSIVE: 84,
};

const LeftSlide = styled(Slide)`
  text-align: left !important;
`;

const HeadingShadow = styled(Heading)`
  text-shadow: 2px 2px rgba(0, 0, 0, .4);
`;

const Lap = ({ children, ...props }) => (
  <Appear>
    <ListItem textSize={TextSize.MEDIUM}>{children}</ListItem>
  </Appear>
);

const Note = styled('p')`
  font-size: 22px !important;
`;

export default class SlideDeck extends Component {
  render() {
    return (
      <Deck theme={theme} progress="pacman">
        <Slide bgColor="tv">
          <Heading textSize={40} textColor='#fff'>History of Traveloka Web Engineering</Heading>
        </Slide>
        <PersonalBackgroundSlide />
        <Slide bgColor="clear">
          <Heading textColor={Colors.BLUE}>My Journey</Heading>
          <List>
            <Lap>Graduated from Electrical Engineering</Lap>
            <Lap>Joined Traveloka October 2014</Lap>
            <Lap>Software Engineer (Web)</Lap>
            <Lap>Software Engineer (Web Infra) January 2016</Lap>
          </List>
        </Slide>
        <Unsplash
          src={require('./assets/no.jpg')}
          credit="Photo by Michael Mroczek on Unsplash"
        />
        <Slide bgColor="clear">
          <Heading textColor={Colors.BLUE}>Disclaimer</Heading>
          <List>
            <ListItem textSize={TextSize.MEDIUM}>This talk doesn’t necessarily represent company views</ListItem>
            <ListItem textSize={TextSize.MEDIUM}>Exact date might be wrong, but this is just general overview</ListItem>
          </List>
        </Slide>
        <Unsplash
          src={require('./assets/start.jpg')}
          credit="Photo by William Stitt on Unsplash"
        />
        <Slide>
          <Heading textColor={Colors.BLUE}>October 2014</Heading>
        </Slide>
        <LeftSlide>
          <Heading textColor={Colors.BLUE}>Framework</Heading>
          <Lap>jQuery</Lap>
          <Lap>Angular-like internal framework</Lap>
          <Lap>Google Closure Compiler</Lap>
          <Lap>VM Template</Lap>
          <Notes>
            In a way, our composition looks like Flutter, OOP-heavy
          </Notes>
        </LeftSlide>
        <LeftSlide>
          <Heading textColor={Colors.BLUE}>Infra</Heading>
          <Lap>Java</Lap>
          <Lap>Dozen EC2s</Lap>
          <Lap>Manual SSH to release</Lap>
          <Lap>Bitbucket Repository</Lap>
          <Lap>No CI</Lap>
          <Lap>No automated test</Lap>
          <Lap>Tried Selenium + TestNG + Burst</Lap>
          <Notes>
            <Note>When releasing changes, we had to manually SSH to dozen EC2 machines.</Note>
            <Note>We also have to wait manually for connection draining</Note>
            <Note>Some people got creative and uses tmux / terminator to ease the pain</Note>
          </Notes>
        </LeftSlide>
        <Unsplash src={require('./assets/cry.jpg')} credit="Photo by Tom Pumford on Unsplash">
          <Notes>
            <Note>If you think you'd cry working on tech stack like that, don't. I wasn't complaining</Note>
            <Note>That's not to say it doesn't have any downside</Note>
          </Notes>
        </Unsplash>
        <Slide>
          <Image src={require('./assets/roll-safe.jpg')} />
        </Slide>
        <Slide>
          <Heading textColor={Colors.BLUE}>Early 2015</Heading>
          <List>
            <Lap>Still Java</Lap>
            <Lap>Ansible</Lap>
            <Lap>Slackbot</Lap>
            <Lap>New mobile web requirement (SEO + SPA)</Lap>
          </List>
          <Notes>
            <Note>Ansible helps us a lot with releasing binary to multiple servers, but we still have manual wait problem for connection draining</Note>
            <Note>We built slackbot integrated with Ansible to automate those manual and error prone task. Ultimately we also have to built internal dashboard for streaming Ansible log for debugging purpose</Note>
            <Note>Our mobile web is already SPA, but it was a monolithic SPA, download-once type of SPA, with no capability of server-side rendering</Note>
            <Note>Besides SEO, SSR have benefit of perceived performance because browser can render our page before we load our client side template. It has downside too of course</Note>
          </Notes>
        </Slide>
        <Unsplash src={require('./assets/lego.jpg')} credit="Photo by Iker Urteaga on Unsplash">
          <div style={{ marginTop: 'calc(50% - 40vh)' }}>
            <HeadingShadow textSize={TextSize.MASSIVE}>Blocks Framework</HeadingShadow>
          </div>
        </Unsplash>
        <Slide>
          <Heading textColor={Colors.BLUE}>Blocks Framework</Heading>
          <List>
            <ListItem textSize={TextSize.MEDIUM}>First render is always server-side rendered</ListItem>
            <ListItem textSize={TextSize.MEDIUM}>Subsequent navigation will load relevant template & script</ListItem>
            <ListItem textSize={TextSize.MEDIUM}>Poor man React reconciliation algorithm</ListItem>
            <ListItem textSize={TextSize.MEDIUM}>Implemented as 2 part: client side JS library, and Java API</ListItem>
          </List>
          <Notes>
            <Note>This method is actually inspired by twitter desktop SPA</Note>
            <Note>You can also find similar works in GitHub's pjax, but this have slightly more features</Note>
            <Note>If you know NextJS, this is exactly what we've built, only overengineered</Note>
          </Notes>
        </Slide>
        <Slide>
          <Heading textColor={Colors.BLUE}>Late 2015</Heading>
          <List>
            <Lap>Node.js & React!!</Lap>
            <Lap>EC2 and PM2</Lap>
            <Lap>Remember Blocks? We also rewrote it to nodejs</Lap>
            <Lap>Nginx & Grafana is our friend</Lap>
            <Lap>GoCD for CI</Lap>
            <Lap>WebdriverIO</Lap>
            <Notes>
              <Note>Why? Mostly because of feedback loop</Note>
              <Note>React only used in SSR</Note>
              <Note>We use react & 2 pass render</Note>
              <Note>Monitoring and release plan is really important if you have big release</Note>
              <Note>We tried selenium again, this time our test code is run in nodejs context using familiar JS API</Note>
            </Notes>
          </List>
        </Slide>
        <Unsplash src={require('./assets/newyear.jpg')} credit="Photo by Joseph Chan on Unsplash" blackBg>
          <Notes>Wow, new year! What exciting project this time?</Notes>
        </Unsplash>
        <Slide>
          <Text>NodeJS migration (contd)</Text>
          <Appear><Text textSize={TextSize.MEDIUM}>Phabricator</Text></Appear>
          <Notes>
            <Note>Not everything is a fun project</Note>
            <Note>We also started moving to phabricator & introducing code review</Note>
          </Notes>
        </Slide>
        <Slide>
          <Heading textColor={Colors.BLUE}>Late 2016</Heading>
          <List>
            <ListItem textSize={TextSize.MEDIUM}>React in client side</ListItem>
            <ListItem textSize={TextSize.MEDIUM}>Jenkins CI</ListItem>
            <ListItem textSize={TextSize.MEDIUM}>Some standard (commit message, directory structure)</ListItem>
            <ListItem textSize={TextSize.MEDIUM}>AWS Elasticbeanstalk</ListItem>
            <ListItem textSize={TextSize.MEDIUM}>Integrated lint & test result</ListItem>
            <ListItem textSize={TextSize.MEDIUM}>Lerna</ListItem>
            <ListItem textSize={TextSize.MEDIUM}>Testcafe for e2e test</ListItem>
          </List>
          <Notes>
            <Note>First introduced client-side react in desktop hotel detail page alongside revamp</Note>
            <Note>We use interface->domain->feature directory structure</Note>
            <Note>We use fix/feature prefix in commit message</Note>
            <Note>Later on we added domain prefix in commit message</Note>
            <Note>AWS EB helps autoscaling & deployment for us, and also our testing env</Note>
            <Note>We created eslint & jest output parser to be compatible with phabricator</Note>
            <Note>Testcafe has few advantages, like having automated wait & modern ES6 API</Note>
          </Notes>
        </Slide>
        <Slide>
          <Heading textColor={Colors.BLUE}>2017</Heading>
          <List>
            <ListItem textSize={TextSize.MEDIUM}>Flowtype in CI</ListItem>
            <ListItem textSize={TextSize.MEDIUM}>Testcafe in CI</ListItem>
            <ListItem textSize={TextSize.MEDIUM}>Browserstack</ListItem>
            <ListItem textSize={TextSize.MEDIUM}>Prettier</ListItem>
          </List>
          <Notes>
            <Note>Flowtype is already in our codebase for a while, just not enforced</Note>
            <Note>Integrating testcafe in CI is quite straightforward</Note>
            <Note>Browserstack is faster in our test, and it has real device support</Note>
            <Note>We didn't use real device in CI yet because of its current limitation (screen record)</Note>
            <Note>Initially we just install githooks for prettier without applying it, turns out this was bad idea</Note>
          </Notes>
        </Slide>
        <Slide>
          <Heading textColor={Colors.BLUE}>2018</Heading>
          <List>
            <ListItem textSize={TextSize.MEDIUM}>GitHub for repository</ListItem>
            <ListItem textSize={TextSize.MEDIUM}>AWS CodeBuild for CI</ListItem>
            <ListItem textSize={TextSize.MEDIUM}>AWS ECS</ListItem>
            <ListItem textSize={TextSize.MEDIUM}>DangerJS</ListItem>
            <ListItem textSize={TextSize.MEDIUM}>Asen (Internal Project)</ListItem>
          </List>
          <Notes>
            <Note>Phabricator has a few limitation, one of them is self managed</Note>
            <Note>Our Jenkins is not secure, and also self managed</Note>
            <Note>EB AWS permission is just too much, ECS is better, but still not perfect</Note>
            <Note>GitHub doesn't support commit report at the moment (no Checks API yet)</Note>
            <Note>Asen helps engineer test their code manually faster</Note>
          </Notes>
        </Slide>
        <Slide>
          <Heading textColor={Colors.BLUE}>Future?</Heading>
          <Appear><Text>We're hiring</Text></Appear>
        </Slide>
        <Slide>
          <Heading textColor={Colors.BLACK}>Key Takeaway</Heading>
          <List>
            <Lap>Business > Tech Stack</Lap>
            <Lap>Everything is a trade-off</Lap>
            <Lap>Make your coworker fall into pit of success</Lap>
            <Lap>Introduce change incrementally</Lap>
            <Lap>Anything that's not automated have greater chance to be abandoned</Lap>
          </List>
          <Notes>
            <Note>In the end what you use doesn't matter</Note>
            <Note>You can't have perfect result, try finding the right balance</Note>
            <Note>Use great default, less confusing API, etc</Note>
            <Note>Whether it's tech or culture</Note>
            <Note>Formatting, Lint, Unit test, E2E test</Note>
          </Notes>
        </Slide>
        <Unsplash src={require('./assets/confetti.jpg')} credit="Photo by Jason Leung on Unsplash" blackBg>
          <div style={{ marginTop: 'calc(50% - 40vh)' }}>
            <HeadingShadow textSize={TextSize.MASSIVE}>Thank You</HeadingShadow>
          </div>
        </Unsplash>
      </Deck>
    );
  }
}

import React from 'react';
import { Deck, Slide, Notes, Appear, Heading, List, ListItem, BlockQuote, Quote, Cite, Code } from 'spectacle';
import createTheme from 'spectacle/lib/themes/default'
import styled from '@emotion/styled';

const Token = {
  colors: {
    primary: '#23888f',
    lightPrimary: '#ffffff',
    darkPrimary: '#333333',
  }
}

const theme = createTheme({
  primary: Token.colors.lightPrimary,
  secondary: Token.colors.darkPrimary,
  tertiary: Token.colors.primary,
  quaternary: Token.colors.primary,
}, {
  primary: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`
});

const Hg = styled.span`
  color: ${Token.colors.primary};
  font-weight: 500;
`;

const Cursor = styled.span`
 animation: blink-animation .8s steps(5, start) infinite;
 position: relative;
 font-size: 1.2em;
 margin-left: -3px;
 color: rgba(0, 100, 110, .2);
  @keyframes blink-animation {
    to {
      visibility: hidden;
    }
  }
  @-webkit-keyframes blink-animation {
    to {
      visibility: hidden;
    }
  }
`;

function TypingAnimation() {
  const texts = [
    'Make',
    'Make',
    'Make',
    'Create',
    'Create',
    'Create',
    'Create',
    'Build',
    'Build',
    'Build',
    'Build',
    'Write',
    'Write',
    'Write',
    'Develop',
    'Develop',
    'Develop',
    'Design',
    'Design',
    'Invent',
    'Devise',
    'Forge',
    'Formulate',
    'Discover',
    'Construct',
  ];
  const [text, setText] = React.useState(texts[0]);
  const [textToWrite, setTextToWrite] = React.useState('');

  React.useEffect(() => {
    const interval = setInterval(() => {
      const maxLength = texts.length;
      setText(text => {
        const index = Math.floor(Math.random() * maxLength);
        let newText = texts[(index + 1) % maxLength];
        while (newText === text) {
          const index = Math.floor(Math.random() * maxLength);
          newText = texts[(index + 1) % maxLength];
        }
        return newText;
      });
    }, 1500);
    return () => clearInterval(interval);
  }, [texts]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTextToWrite(textToWrite => {
        return text.slice(0, textToWrite.length + 1);
      })
    }, 60);
    return () => {
      setTextToWrite('');
      clearInterval(interval)
    };
  }, [text]);

  return (
    <div style={{ textAlign: 'left' }}>
      <span>{'You Should '}</span>
      <Hg>{textToWrite}</Hg>
      <Cursor>{'|'}</Cursor>
      <span style={{ marginLeft: -5 }}>{' Your Own Framework'}</span>
    </div>
  );
}

const Frame = styled.iframe`
  border: 0;
`;

function TweetEmbed(props) {
  const [loaded, setLoaded] = React.useState(false);
  const src = `https://paper-git-hide-twitter-thread.pveyes.now.sh/embed/twitter/${btoa(props.url)}`;

  function handleLoad() {
    setLoaded(true);
  }
  const frameStyle = loaded
    ? {}
    : { opacity: 0, pointerEvents: 'none' }

  return (
    <>
      <Frame
        width={500}
        height={props.height}
        src={src}
        style={frameStyle}
        onLoad={handleLoad}
      />
    </>
  )
}

const LeftTitle = styled.h1`
  color: ${Token.colors.darkPrimary};
  text-align: left;
`;

const Subtitle = styled.div`
  text-align: left;
`;

const Image = styled.img`
  max-height: ${props => props.scale}vh;
  max-width: ${props => props.scale}vw;
  height: auto;
  width: auto;
`;

const MultiColumn = styled.div`
  display: flex;
  text-align: left;

  > ul {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }
`;

const Anchor = styled.a`
  color: ${Token.colors.darkPrimary};

  &:hover {
    color: ${Token.colors.primary};
  }
`;

const Link = ({ children, ...props }) => {
  return <Anchor href={children} {...props}>{children}</Anchor>
}

function SubtitleAppear(props) {
  return <Appear><Subtitle>{props.children}</Subtitle></Appear>
}

export default function SlideDeck() {
  return (
    <Deck theme={theme} progress="bar">
      <Slide>
        <TypingAnimation />
      </Slide>
      <Slide>
        <TweetEmbed url="https://twitter.com/pveyes/status/1179008977264234496" height={400} />
      </Slide>
      <Slide>
        <TweetEmbed url="https://twitter.com/chochosmx/status/1183045782095699968" height={250} />
        <Notes>
          {'I\'m a div-ops'}
        </Notes>
      </Slide>
      <Slide>
        <TweetEmbed url="https://twitter.com/acdlite/status/1118405824508911617" height={250} />
        <Notes>
          In 5 years, I only worked on 1 product/feature.<br />
          Disclaimer: I don't know everything
        </Notes>
      </Slide>
      <Slide>
        <Heading>5A 1B</Heading>
        <List>
          <Appear><ListItem><Hg>Apa</Hg></ListItem></Appear>
          <Appear><ListItem>Meng<Hg>apa</Hg></ListItem></Appear>
          <Appear><ListItem>Si<Hg>apa</Hg></ListItem></Appear>
          <Appear><ListItem>K<Hg>apa</Hg>n</ListItem></Appear>
          <Appear><ListItem>Di<Hg>apa</Hg></ListItem></Appear>
          <Appear><ListItem>Bagaimana</ListItem></Appear>
        </List>
      </Slide>
      <Slide>
        <LeftTitle>What?</LeftTitle>
      </Slide>
      <Slide>
        <BlockQuote>
          <Quote style={{ color: Token.colors.darkPrimary, fontSize: '1em', fontWeight: 400, lineHeight: 1.5 }}>In computer programming, a software framework is an <strong>abstraction</strong> in which software providing generic functionality can be selectively changed by additional user-written code, thus providing application-specific software.</Quote>
          <Cite>Wikipedia, the free encyclopedia</Cite>
        </BlockQuote>
        <Notes>Framework is essentially abstraction providing customizable generic functionality</Notes>
      </Slide>
      <Slide>
        <LeftTitle>Who?</LeftTitle>
      </Slide>
      <Slide>
        <Image scale={70} src={require('./assets/oprah.gif')} />
      </Slide>
      <Slide>
        <LeftTitle>Why?</LeftTitle>
        <Appear>
          <div style={{ textAlign: 'left' }}>
            No blurred lines between framework and glue code
          </div>
        </Appear>
        <Notes>
          You get to determine which one can be hacky, which one should have strong foundation.
          Most importantly, you get to say no.
          Here is where you define goal of your framework.
        </Notes>
      </Slide>
      <Slide>
        <ListItem>Goals</ListItem>
        <List>
          <ListItem>Reduce <Hg>complexity</Hg></ListItem>
          <ListItem>First class support for <Hg>performance</Hg> features</ListItem>
          <ListItem>Improved <Hg>autonomy</Hg> & ownership</ListItem>
        </List>
        <Notes>
          Here are main goals for TVLK5, but I'll discuss more about complexity going forward
        </Notes>
      </Slide>
      <Slide>
        <LeftTitle>Hello World</LeftTitle>
        <MultiColumn>
          <ul>
            <strong>Legacy</strong>
            <li>3+ files</li>
            <li>10+ lines of code</li>
            <li>3+ imports</li>
          </ul>
          <ul>
            <strong>New</strong>
            <li>1 file</li>
            <li>1 line of code</li>
            <li>1 import (React)</li>
          </ul>
        </MultiColumn>
        <Notes>To get started, engineer have to learn a lot of things, juggling a bunch of files</Notes>
      </Slide>
      <Slide>
        <LeftTitle>Where?</LeftTitle>
        <SubtitleAppear><Hg>Larger</Hg> project. Personal / work</SubtitleAppear>
      </Slide>
      <Slide>
        <LeftTitle>When?</LeftTitle>
      </Slide>
      <Slide>
        <span style={{ fontSize: '8rem' }} role="img" aria-label="Sick emoji">🤒</span>
        <Notes>
          Your project will get bigger, you'll feel some pain.
          That's when you start thinking about this
        </Notes>
      </Slide>
      <Slide>
        <TweetEmbed url="https://twitter.com/JakeWharton/status/1167450362107834368" height={350} />
        <Notes>
          Premature optimization is the root of all evil, emphasis on premature.
          How do you know it's premature? When you haven't feel any pain when
          developing apps
        </Notes>
      </Slide>
      <Slide>
        Notice that <Hg>how</Hg> is the last?
        <Notes>
          This is because how is the implementation details. They don't matter
          until you're sure this is the correct thing you should do instead of
          anything else
        </Notes>
      </Slide>
      <Slide>
        <LeftTitle>How?</LeftTitle>
        <List>
          <Appear><ListItem>Define clear goal, solve pain points</ListItem></Appear>
          <Appear><ListItem>Work within constraints</ListItem></Appear>
        </List>
      </Slide>
      <Slide>
        <LeftTitle>Pain Points</LeftTitle>
        <Notes>
          Pain points is any blocker, no matter how small that makes you curse
        </Notes>
        <List>
          <Appear><ListItem>Inconsistent API</ListItem></Appear>
          <Appear><ListItem>Lock-in</ListItem></Appear>
          <Appear><ListItem>Bloated hydration data</ListItem></Appear>
        </List>
      </Slide>
      <Slide>
        <LeftTitle>Inconsistent API</LeftTitle>
        <div style={{ textAlign: 'left' }}>
          <Image scale={70} src={require('./assets/inconsistent.png')} />
        </div>
        <Notes>
          This is 2 files, from 2 different product, written by different people
        </Notes>
      </Slide>
      <Slide>
        <LeftTitle>Lock-in</LeftTitle>
        <div style={{ textAlign: 'left' }}>
          <Image scale={50} src={require('./assets/lock-in.png')} />
        </div>
        <Notes>
          We use redux everywhere, where you're forced to use it.
          The worst part is the function name: configureStore.
          This means it's another abstraction on top of redux
        </Notes>
      </Slide>
      <Slide>
        <LeftTitle>Bloated hydration data</LeftTitle>
        <div style={{ textAlign: 'left' }}>
          <Image scale={50} src={require('./assets/bloated-hydration.png')} />
        </div>
        <Notes>
          As you see in the screenshot, the HTML is only 1/3 of our entire markup!
        </Notes>
      </Slide>
      <Slide>
        <LeftTitle>Every project has their own <Hg>constraints</Hg> </LeftTitle>
        <Subtitle>
          Your job is to make it works within those constraints
        </Subtitle>
        <Notes>
          Constraints is where we can focus on low-effort high-impact work.
          It doesn't mean that the rules are set in stone, nothing in software is
          Constraint is something you can technically change, but won't because
          there's something better else to do.
        </Notes>
      </Slide>
      <Slide>
        <LeftTitle>Constraints</LeftTitle>
        <List>
          <ListItem>Our translation data is in API</ListItem>
          <ListItem>Different host for different API</ListItem>
          <ListItem>"SEO" a.k.a SSR</ListItem>
        </List>
        <Notes>
          Here are few constraints that we have in TVLK web
        </Notes>
      </Slide>
      <Slide>
        <LeftTitle>Let's get started</LeftTitle>
      </Slide>
      <Slide>
        <TweetEmbed url="https://twitter.com/aweary/status/1055498586488627200" height={400} />
        <Notes>
          There are a lot of ways to start a framework project. In my experience, using RFC turns out to be a great start.
          Use RFC to gather feedback before implementation.
        </Notes>
      </Slide>
      <Slide>
        <Image scale={90} src={require('./assets/rfc-section.png')} />
        <Notes>
          Writing RFC forces you to answer questions related to your proposed design.
          You also may hear in different form: design document, etc
          You don't have to write a formal document. Find a way to identify drawback
          and alternatives approach
        </Notes>
      </Slide>
      <Slide>
        <LeftTitle>What kind of API?</LeftTitle>
        <Notes>
          When people talk about framework, they usually refer to modules, function.
          For the most part this is true
        </Notes>
      </Slide>
      <Slide>
        <Subtitle>
          <Image scale={60} src={require('./assets/hooks-docs.png')} />
          <Link style={{ marginLeft: 20 }}>https://reactjs.org/docs/hooks-custom.html</Link>
        </Subtitle>
        <Notes>React hooks is the best way to create reusable logic</Notes>
      </Slide>
      <Slide>
        <LeftTitle>React Hooks Combo</LeftTitle>
        <List>
          <ListItem>React Context + <Code>useContext</Code></ListItem>
          <ListItem><Code>useReducer</Code> + <Code>useEffect</Code></ListItem>
          <ListItem><Code>useState</Code> + <Code>useTransition</Code></ListItem>
          <ListItem>Any combination of above</ListItem>
        </List>
      </Slide>
      <Slide>
        <Image scale={80} src={require('./assets/api-hooks.png')} />
        <Notes>Our framework is mostly hooks</Notes>
      </Slide>
      <Slide>
        <Image scale={50} src={require('./assets/tvlk5.png')} />
        <Notes>
          It interops better with standard (Intl), and works across locale & currency
        </Notes>
      </Slide>
      <Slide>
        <LeftTitle>Alternatives API</LeftTitle>
        <List>
          <ListItem>Convention</ListItem>
          <ListItem>Types</ListItem>
        </List>
      </Slide>
      <Slide>
        <Image scale={90} src={require('./assets/client-ext.png')} />
        <Notes>
          This solves bundling issue when we encounter nodejs specific modules.
        </Notes>
      </Slide>
      <Slide>
        <Image scale={80} src={require('./assets/client-ext-usage.png')} />
        <Notes>
          Turns out this also help us build the rest of the framework cleanly
        </Notes>
      </Slide>
      <Slide>
        <Image scale={80} src={require('./assets/types-useapi.png')} />
        <Notes>
          You can also extends your API with types, assisting with helpful autocomplete
        </Notes>
      </Slide>
      <Slide>
        <Image scale={80} src={require('./assets/code-useCR.png')} />
        <Notes>
          Or preventing error at runtime
        </Notes>
      </Slide>
      <Slide>
        <LeftTitle>Composable lower-level primitives</LeftTitle>
        <Appear>
          <Subtitle>Let people build on top, then <Hg>uplift</Hg></Subtitle>
        </Appear>
        <Notes>
          No matter what you design, provide low level primitives for other people to build to.
          If it works, uplift
        </Notes>
      </Slide>
      <Slide>
        <div style={{ transform: 'scale(.8)' }}>
          <TweetEmbed url="https://twitter.com/zeithq/status/1188911002626097157" height={800} />
        </div>
        <Notes>Just recently released from Zeit</Notes>
      </Slide>
      <Slide>
        <span style={{ display: 'block' }} role="img" aria-label="Mind blown">🤯</span>
        <Image scale={50} src={require('./assets/hooks-compose.png')} />
        <Notes>It works perfectly with our useAPI hooks </Notes>
      </Slide>
      <Slide>
        <TweetEmbed url="https://twitter.com/dan_abramov/status/1186371934323462145" height={250} />
        <Notes>
          This part is equally important as your implementation
        </Notes>
      </Slide>
      <Slide>
        <img width="150" height="150" src="https://docusaurus.io/img/docusaurus_keytar.svg" alt="Docusaurus Logo" />
        <Notes>
          We use Docusaurus for our framework documentation, write it alongside implementation
        </Notes>
      </Slide>
      <Slide>
        <LeftTitle>Lesson Learned</LeftTitle>
      </Slide>
      <Slide>
        <TweetEmbed url="https://twitter.com/jkup/status/1166771001369100289" height={250} />
        <Notes>
          Use types and unit test to help with your implementation
        </Notes>
      </Slide>
      <Slide>
        <TweetEmbed url="https://twitter.com/dhh/status/1177974040432037888" height={250} />
        <Notes>
          Your goal is to increase productivity, not decrease them
        </Notes>
      </Slide>
      <Slide>
        <TweetEmbed url="https://twitter.com/destroytoday/status/1183163262961106945" height={250} />
        <Notes>
          Don't get attached to tech
        </Notes>
      </Slide>
      <Slide>
        <LeftTitle>OSS is nice to have</LeftTitle>
        <SubtitleAppear>Sharing approach > sharing code</SubtitleAppear>
      </Slide>
      <Slide>
        <Heading>Thank you <span role="img" aria-label="Bow emoji">🙇‍</span></Heading>
      </Slide>
    </Deck>
  )
}

import React, { Component } from 'react';
import { Deck, Slide, Heading, Text } from 'spectacle';
import Terminal from 'spectacle-terminal';
import CodeSlide from 'spectacle-code-slide';
import styled from 'react-emotion';
import raw from 'raw.macro';
import createTheme from 'spectacle/lib/themes/default';
import Dim from '../../shared/Dim';
import TerminalCommand from '../../shared/TerminalCommand';
import PersonalBackgroundSlide from '../../shared/slides/PersonalBackground';

const jestCode = raw('./codes/jest.example.js');
const mockCode = raw('./codes/mock.example.js');
const snapshotCode = raw('./codes/snapshot.example.js');
const extendCode = raw('./codes/extend.example.js');
const jsonCode = raw('./codes/traveloka.package.json');
const jestTransformCode = raw('./codes/jest.transform.js');
const enzymeSetupCode = raw('./codes/enzyme-setup.js');
const dangerCode = raw('./codes/dangerfile.js');

const theme = createTheme({
  primary: '#99424f',
  code: 'rgb(45,45,45)',
}, {
  primary: 'Helvetica, sans-serif',
});

const TBold = styled('strong')`
  color: #fff;
`;

const TError = styled('span')`
  color: #d44;
`;

const TSuccess = styled('span')`
  color: #4d4;
`;

const Items = styled('ul')`
  text-align: left;
  font-size: .7em;
  color: #fff;

  > li {
    margin-bottom: 15px;
  }
`;

export default class SlideDeck extends Component {
  render() {
    return (
      <Deck theme={theme} progress='bar'>
        <Slide>
          <Heading textSize={44}>Testing JavaScript Applications with Jest</Heading>
          <div style={{marginTop: '1em'}}>
            <Text textSize={28} textColor="#fff">
              <Dim>https://</Dim>
              <span>talks.fatihkalifa.com/fjest</span>
            </Text>
          </div>
        </Slide>
        <PersonalBackgroundSlide />
        <Slide>
          <Heading>Test Runner</Heading>
          <Text textColor='#fff'>Mocha, Jasmine, Ava, Tape, Karma, QUnit</Text>
        </Slide>
        <Slide>
          <Heading>Assertion</Heading>
          <Text textColor='#fff'>Assert, Chai, Should.js, Expect</Text>
        </Slide>
        <Slide>
          <Heading>Mocks</Heading>
          <Text textColor='#fff'>Sinon, Proxyquire, Nock</Text>
        </Slide>
        <Slide>
          <Heading>Code Coverage</Heading>
          <Text textColor='#fff'>Istanbul, NYC</Text>
        </Slide>
        <Slide>
          <Heading>Jest</Heading>
        </Slide>
        <Slide bgColor='code'>
          <div style={{ height: 646 }}>
            <CodeSlide
              slideIndex={7}
              transition={[]}
              code={jestCode}
              lang='js'
              ranges={[
                { loc: [0, 7], title: '__tests__/sum.test.js' },
                { loc: [0, 1], title: 'require module' },
                { loc: [2, 3], title: 'test definition' },
                { loc: [3, 4] },
                { loc: [4, 5], title: 'assertion' }
              ]}
            />
          </div>
        </Slide>
        <Slide>
          <Heading>Fast</Heading>
          <Text textColor='#fff'>Parallel, VCS-aware, Transform Cache, Failure Heuristic</Text>
        </Slide>
        <Slide>
          <Terminal isMaximized={false} title='fatih@mbp-dev' output={[
            <TerminalCommand
              path='~/dev/talks'
              branch='master*'
              timeout={500}
              command='jest --watch'
            />,
            <div style={{ color: '#999' }}>
              <div style={{ whiteSpace: 'initial' }}>
                <TBold>No tests found related to files changed since last commit.</TBold>
                <span> </span>
                <span>Press `a` to run all tests, or run Jest with `--watchAll`.</span>
              </div>
              <p>
                <TBold>Watch Usage</TBold>
                <div> › Press <TBold>a</TBold> to run all tests.</div>
                <div> › Press <TBold>f</TBold> to run only failed tests.</div>
                <div> › Press <TBold>p</TBold> to filter by a filename regex pattern.</div>
                <div> › Press <TBold>t</TBold> to filter by a test name regex pattern.</div>
                <div> › Press <TBold>q</TBold> to quit watch mode.</div>
                <div> › Press <TBold>Enter</TBold> to trigger a test run.</div>
              </p>
            </div>
          ]}/>
        </Slide>
        <Slide>
          <Heading>Great DX</Heading>
          <Text textColor='#fff'>Immersive Watch Mode, Failing Test Output, Snapshot Testing</Text>
        </Slide>
        <Slide>
          <Terminal isMaximized title='fatih@mbp-dev' output={[
            <TerminalCommand
              path='~/dev/talks'
              branch='master*'
              timeout={500}
              command='jest'
            />,
            <div style={{ color: '#999' }}>
              <TError>● css vendor prefixes</TError>
              <p />
              <div>  expect(<TError>value</TError>).toMatchSnapshot()</div>
              <p />
              <div>  <TError>Received value</TError><TBold> does not match </TBold><TSuccess>stored snapshot 1</TSuccess>.</div>
              <p />
              <div><TSuccess>  - Snapshot</TSuccess></div>
              <div><TError>  + Received</TError></div>
              <p />
              <div style={{ color: '#f3f99d' }}>  @@ -1,10 +1,10 @@</div>
              <div>{'    <div'}</div>
              <div>{'      style={'}</div>
              <div>{'        Object {'}</div>
                <TError>{'+       "MsTextSizeAdjust": "100%",'}</TError>
                <div>{'        "WebkitTextSizeAdjust": "100%",'}</div>
                <TSuccess>{'-       "msTextSizeAdjust": "100%",'}</TSuccess>
              <div>{'        }'}</div>
              <div>{'      }'}</div>
              <div>{'    >'}</div>
            </div>
          ]} />
        </Slide>
        <Slide>
          <Heading>Rich Features</Heading>
          <Text textColor='#fff'>Powerful Mock, Snapshot Testing, Extensible Assertion</Text>
        </Slide>
        <Slide bgColor='code'>
          <div style={{ height: 646, fontSize: '.5em' }}>
            <CodeSlide
              slideIndex={13}
              transition={[]}
              code={mockCode}
              lang='js'
              ranges={[
                { loc: [0, 23], title: 'Mock HTTP request' },
                { loc: [1, 2] },
                { loc: [3, 4], title: 'Mock module' },
                { loc: [0, 1] },
                { loc: [11, 17], title: 'Mock behavior' },
                { loc: [17, 18], title: 'Use module' },
                { loc: [19, 25], title: 'Mock assertion' },
                { loc: [26, 27], title: 'Additional assertion' },
                { loc: [5, 9], title: 'Mock cleanup' },
              ]}
            />
          </div>
        </Slide>
        <Slide bgColor='code'>
          <div style={{ height: 646, fontSize: '.5em' }}>
            <CodeSlide
              slideIndex={14}
              transition={[]}
              code={snapshotCode}
              lang='js'
              ranges={[
                { loc: [0, 14], title: 'Snapshot Testing' },
                { loc: [5, 6], title: 'Get result' },
                { loc: [6, 7], title: 'Compare with snapshot' },
              ]}
            />
          </div>
        </Slide>
        <Slide bgColor='code'>
          <div style={{ height: 646, fontSize: '.6em' }}>
            <CodeSlide
              slideIndex={15}
              transition={[]}
              code={raw('./codes/raw.macro.snap')}
              lang='js'
              ranges={[
                { loc: [0, 18], title: 'pveyes/raw.macro' },
                { loc: [4, 8], title: 'Before' },
                { loc: [11, 15], title: 'After' },
              ]}
            />
          </div>
        </Slide>
        <Slide bgColor='code'>
          <div style={{ height: 646, fontSize: '.5em' }}>
            <CodeSlide
              slideIndex={16}
              transition={[]}
              code={extendCode}
              lang='js'
              ranges={[
                { loc: [0, 39], title: 'Extend Assertion' },
                { loc: [32, 38], title: 'Anagram Test' },
                { loc: [36, 37], title: 'Custom assertion' },
                { loc: [22, 31], title: 'Setup' },
                { loc: [23, 24], title: 'Method Name' },
                { loc: [25, 29], title: 'API Contract' },
                { loc: [24, 25], title: 'Test' },
                { loc: [6, 21], title: 'Custom error message' },
                { loc: [0, 1], title: 'Helper' },
              ]}
            />
          </div>
        </Slide>
        <Slide>
          <Heading>Jest @traveloka</Heading>
          <Text textColor='#fff'>JSDOM, Global Coverage, Multi Runner, Custom Transform, Enzyme Setup, Danger</Text>
        </Slide>
        <Slide bgColor='code'>
          <div style={{ height: 646, fontSize: '.5em' }}>
            <CodeSlide
              slideIndex={18}
              transition={[]}
              code={jsonCode}
              lang='json'
              ranges={[
                { loc: [0, 17], title: 'package.json' },
                { loc: [2, 6], title: 'Multi Runner' },
                { loc: [6, 11], title: 'Global Coverage' },
                { loc: [11, 14], title: 'Custom Transform' },
                { loc: [14, 15], title: 'Enzyme Setup' },
              ]}
            />
          </div>
        </Slide>
        <Slide bgColor='code'>
          <div style={{ height: 646, fontSize: '.5em' }}>
            <CodeSlide
              slideIndex={19}
              transition={[]}
              code={jestTransformCode}
              lang='js'
              ranges={[
                { loc: [0, 7], title: 'jest.transform.js' }
              ]}
            />
          </div>
        </Slide>
        <Slide bgColor='code'>
          <div style={{ height: 646, fontSize: '.5em' }}>
            <CodeSlide
              slideIndex={20}
              transition={[]}
              code={enzymeSetupCode}
              lang='js'
              ranges={[
                { loc: [0, 7], title: 'enzyme-setup.js' }
              ]}
            />
          </div>
        </Slide>
        <Slide bgColor='code'>
          <div style={{ height: 646, fontSize: '.5em' }}>
            <CodeSlide
              slideIndex={20}
              transition={[]}
              code={dangerCode}
              lang='js'
              ranges={[
                { loc: [0, 28], title: 'dangerfile.js' },
                { loc: [4, 23], title: 'read JSON output' },
                { loc: [24, 28], title: 'Report status' },
              ]}
            />
          </div>
        </Slide>
        <Slide>
          <Heading>Why not Jest?</Heading>
          <Items>
            <li>
              <strong>Verbose API</strong><br />
              <code>jest.useFakeTimers()</code>, <code>jest.fn().mockImplementation()</code>
            </li>
            <li>
              <strong>Globals</strong><br />
              <code>beforeEach</code>, <code>describe</code>
            </li>
            <li><strong>Facebook is Evil</strong>, <s>PATENTS</s></li>
          </Items>
        </Slide>
        <Slide bgColor='#fff'>
          <Heading textColor='primary'>Thank You</Heading>
          <img src={require('./assets/jest.svg')} height='75px' alt='Jest Logo' />
        </Slide>
      </Deck>
    );
  }
}

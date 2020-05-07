import React, { createElement, useEffect } from 'react';
import 'tabler-react/dist/Tabler.css';
import './App.css';

import { Tabs, Tab, Container, Form, Grid, Card, Button } from 'tabler-react';
import { FixedSizeGrid as VirtualizedGrid } from 'react-window';

import * as Icons from 'tabler-icons-react';
import { useState } from 'react';
import Editor from '@monaco-editor/react';
import AutoSizer from 'react-virtualized-auto-sizer';

import { SliderPicker } from 'react-color';

import logo from './logo.svg';

const GUTTER_SIZE = 10;

function App() {
  const [filter, setFilter] = useState('');
  const [size, setSize] = useState(48);
  const [strokeWidth, setStrokeWidth] = useState(2);
  const [color, setColor] = useState('black');
  const [activeIcon, setActiveIcon] = useState(null);

  const [icons, setIcons] = useState(Object.entries(Icons));

  useEffect(() => {
    setIcons(
      Object.entries(Icons).filter(([name]) =>
        name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
      )
    );
  }, [filter]);

  return (
    <main className='app'>
      <div className='alert alert-primary'>
        <Container>
          Hey! 👋 <strong>Tabler Icons</strong> set is a part of{' '}
          <a href='https://tabler.io'>
            <strong>Tabler</strong>
          </a>{' '}
          — Premium and Open Source dashboard template with responsive and high
          quality UI.
        </Container>
      </div>
      <Container>
        <img src={logo} height='40' />

        <h1 className='lead'>
          A set of over 450 free MIT-licensed high-quality SVG icons
          <br />
          for you to use in your web projects
          <br />
          <Button
            size='lg'
            color='success'
            RootComponent='a'
            target='_blank'
            href='https://github.com/konradkalemba/tabler-icons-react#usage'
          >
            Install for React
          </Button>
          <Button
            size='lg'
            color='secondary'
            className='ml-2'
            RootComponent='a'
            target='_blank'
            href='https://github.com/konradkalemba/tabler-icons-react'
          >
            GitHub
          </Button>
          <Button
            size='lg'
            color='secondary'
            className='ml-2'
            RootComponent='a'
            target='_blank'
            href='https://github.com/tabler/tabler-icons'
          >
            SVGs
          </Button>
        </h1>

        <Grid.Row>
          <Grid.Col md={8} xs={12}>
            <Form.Input
              className='mb-2'
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              placeholder='Search for icons...'
            />
            <AutoSizer>
              {({ width }) => (
                <VirtualizedGrid
                  itemData={icons}
                  columnCount={4}
                  columnWidth={width / 4 - GUTTER_SIZE / 2}
                  height={600}
                  rowCount={Math.ceil(icons.length / 4)}
                  rowHeight={94}
                  width={width}
                >
                  {({ data, columnIndex, rowIndex, style }) => {
                    const index = rowIndex * 4 + columnIndex;

                    if (!data[index]) {
                      return null;
                    }

                    return (
                      <div
                        className={`icon-preview ${
                          activeIcon &&
                          activeIcon.name === data[index][0] &&
                          'active'
                          }`}
                        onClick={() =>
                          setActiveIcon({
                            name: data[index][0],
                            icon: data[index][1],
                          })
                        }
                        style={{
                          ...style,
                          left: style.left + GUTTER_SIZE,
                          top: style.top + GUTTER_SIZE,
                          width: style.width - GUTTER_SIZE,
                          height: style.height - GUTTER_SIZE,
                        }}
                      >
                        {createElement(data[index][1], {
                          size: 32,
                          color: 'black',
                        })}
                        <div>{data[index][0]}</div>
                      </div>
                    );
                  }}
                </VirtualizedGrid>
              )}
            </AutoSizer>
          </Grid.Col>
          <Grid.Col md={4}>
            {!activeIcon && (
              <div className='alert alert-info'>
                Click on any icon on the left to see more customization options
                and example code.
              </div>
            )}
            {activeIcon && (
              <Card title={activeIcon.name}>
                <Card.Body>
                  <div className='text-center'>
                    {createElement(activeIcon.icon, {
                      size,
                      strokeWidth,
                      color,
                    })}
                  </div>
                  <Form.Group label='Size'>
                    <Form.Ratio
                      min={10}
                      max={60}
                      step={2}
                      value={size}
                      onChange={(e) => setSize(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group label='Stroke'>
                    <Form.Ratio
                      min={0.5}
                      max={3}
                      step={0.5}
                      value={strokeWidth}
                      onChange={(e) => setStrokeWidth(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group label='Color'>
                    <SliderPicker
                      color={color}
                      onChangeComplete={({ hex }) => setColor(hex)}
                    />
                  </Form.Group>
                  <Tabs initialTab='React'>
                    <Tab title='React'>
                      <Editor
                        height='200px'
                        width='100%'
                        language='javascript'
                        value={`import { ${activeIcon.name} } from 'tabler-icons-react';
              
export default function Example() {
  return <${activeIcon.name}
    size={${size}}
    strokeWidth={${strokeWidth}}
    color={'${color}'}
  />;
}`}
                        options={{
                          readOnly: true,
                          quickSuggestions: false,
                          wordWrap: true,
                          minimap: {
                            enabled: false,
                          },
                        }}
                      />
                    </Tab>
                  </Tabs>
                </Card.Body>
              </Card>
            )}
          </Grid.Col>
        </Grid.Row>
      </Container>
    </main>
  );
}

export default App;

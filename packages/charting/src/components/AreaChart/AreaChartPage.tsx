import * as React from 'react';

import { ComponentPage, ExampleCard, IComponentDemoPageProps, PropertiesTableSet } from '@uifabric/example-app-base';

import { AreaChartBasicExample } from './examples/AreaChart.Basic.Example';
import { AreaChartMultipleExample } from './examples/AreaChart.Multiple.Example';
import { AreaChartStyledExample } from './examples/AreaChart.Styled.Example';

// tslint:disable-next-line: max-line-length
const AreaChartBasicExampleCode = require('!raw-loader!@uifabric/charting/src/components/AreaChart/examples/AreaChart.Basic.Example.tsx') as string;
// tslint:disable-next-line: max-line-length
const AreaChartMultipleExampleCode = require('!raw-loader!@uifabric/charting/src/components/AreaChart/examples/AreaChart.Multiple.Example.tsx') as string;
// tslint:disable-next-line: max-line-length
const AreaChartStyledExampleCode = require('!raw-loader!@uifabric/charting/src/components/AreaChart/examples/AreaChart.Styled.Example.tsx') as string;

export class AreaChart extends React.Component<IComponentDemoPageProps, {}> {
  public render(): JSX.Element {
    return (
      <ComponentPage
        title="Area Chart"
        componentName="AreaChartBasicExample"
        exampleCards={
          <div>
            <ExampleCard title="Area Chart basic" code={AreaChartBasicExampleCode}>
              <AreaChartBasicExample />
            </ExampleCard>
            <ExampleCard title="Multiple Area chart" code={AreaChartMultipleExampleCode}>
              <AreaChartMultipleExample />
            </ExampleCard>
            <ExampleCard title="Styled Area chart" code={AreaChartStyledExampleCode}>
              <AreaChartStyledExample />
            </ExampleCard>
          </div>
        }
        propertiesTables={
          <PropertiesTableSet
            sources={[
              require<
                string
                // tslint:disable-next-line: max-line-length
              >('!raw-loader!@uifabric/charting/src/components/AreaChart/AreaChart.types.ts'),
            ]}
          />
        }
        /* tslint:disable:max-line-length */
        overview={
          <div>
            <p>Area chart description</p>
          </div>
        }
        /* tslint:enable:max-line-length */
        bestPractices={<div />}
        dos={
          <div>
            <ul>
              <li />
            </ul>
          </div>
        }
        donts={
          <div>
            <ul>
              <li />
            </ul>
          </div>
        }
        isHeaderVisible={this.props.isHeaderVisible}
      />
    );
  }
}

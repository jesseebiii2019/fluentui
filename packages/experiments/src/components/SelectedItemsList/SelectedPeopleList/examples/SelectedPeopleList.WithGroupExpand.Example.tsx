import * as React from 'react';

import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { IPersonaProps, IPersona } from 'office-ui-fabric-react/lib/Persona';
import { people, groupOne, groupTwo } from '@uifabric/example-data';
import { SelectedPeopleList, SelectedPersona, ISelectedItemProps } from '@uifabric/experiments/lib/SelectedItemsList';

export interface IPeopleSelectedItemsListExampleState {
  currentSelectedItems: IPersonaProps[];
}

export class SelectedPeopleListWithGroupExpandExample extends React.Component<
  {},
  IPeopleSelectedItemsListExampleState
> {
  constructor(props: {}) {
    super(props);

    this.state = {
      currentSelectedItems: [people[40]],
    };
  }

  public render(): JSX.Element {
    return (
      <div className={'ms-BasePicker-text'}>
        Click the '+' icon to the left of the group to expand it into a number of personas
        <br />
        <PrimaryButton text="Add another item" onClick={this._onAddItemButtonClicked} />
        {this._renderExtendedPicker()}
      </div>
    );
  }

  /**
   * Build a custom selected item capable of being edited with a dropdown and
   * capable of eidting
   */
  private SelectedItem = (props: ISelectedItemProps<IPersonaProps>) => (
    <SelectedPersona canExpand={this._canExpandItem} getExpandedItems={this._getExpandedGroupItems} {...props} />
  );

  private _renderExtendedPicker(): JSX.Element {
    return (
      <div>
        <SelectedPeopleList
          key={'normal'}
          removeButtonAriaLabel={'Remove'}
          selectedItems={[...this.state.currentSelectedItems]}
          onRenderItem={this.SelectedItem}
          onItemsRemoved={this._onItemsRemoved}
        />
      </div>
    );
  }

  private _onAddItemButtonClicked = (): void => {
    const randomPerson = people[Math.floor(Math.random() * (people.length - 1))];
    this.setState({ currentSelectedItems: [...this.state.currentSelectedItems, randomPerson] });
  };

  private _onItemsRemoved = (items: IPersona[]): void => {
    const currentSelectedItemsCopy = [...this.state.currentSelectedItems];
    items.forEach(item => {
      const indexToRemove = currentSelectedItemsCopy.indexOf(item);
      currentSelectedItemsCopy.splice(indexToRemove, 1);
      this.setState({ currentSelectedItems: [...currentSelectedItemsCopy] });
    });
  };

  private _getExpandedGroupItems(item: IPersonaProps): IPersonaProps[] {
    switch (item.text) {
      case 'Group One':
        return groupOne;
      case 'Group Two':
        return groupTwo;
      default:
        return [];
    }
  }

  private _canExpandItem(item: IPersonaProps): boolean {
    return item.text !== undefined && item.text.indexOf('Group') !== -1;
  }
}

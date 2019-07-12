import * as React from 'react';
import { Link } from 'react-router-dom';
import Button, { ButtonProps } from '@material-ui/core/Button';
import { Fab } from '@material-ui/core';
import { LocationDescriptor } from 'history';

interface IButtonLinkProps extends ButtonProps {
    to: LocationDescriptor;
    isFab?: boolean;
    fabProps?: {
      fabClasses?: any;
      color?: any;
    }
}

export class ButtonLink extends React.Component<IButtonLinkProps>{
  public render () {
    const { isFab = false } = this.props;
    if (isFab) {
      const { fabProps: { color, fabClasses} } = this.props;
      return (
        <Fab
          color={color}
          className={fabClasses}
          variant='extended'
          component={
            ({ innerRef, ...linkProps }) =>
              <Link {...linkProps} to={this.props.to} />
          }
        >
          {this.props.children}
        </Fab>
      )
    }
    return (
        <Button 
          {...this.props}
          component={
            ({ innerRef, ...linkProps }) =>
              <Link {...linkProps} to={this.props.to} />
          }
        >
          {this.props.children}
        </Button>
    );
  }
} 
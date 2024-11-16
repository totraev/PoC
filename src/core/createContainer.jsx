const state = {};
const et = new EventTarget();

export const createContainer =
  (mapStateToProps, mapActionsToProps) => (Component) => {
    return function WapperContainer(props) {
      const stateProps = mapStateToProps(state, props);
      const actionProps = mapActionsToProps(et, props);

      return <Component {...stateProps} {...actionProps} />;
    };
  };

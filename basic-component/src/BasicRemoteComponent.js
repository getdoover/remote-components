import RemoteAccess from 'customer_site/RemoteAccess';
import RemoteComponentWrapper from 'customer_site/RemoteComponentWrapper';

class BasicRemoteComponentInner extends RemoteAccess {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <div ref={this.containerRef}>
          This is the basic remote component
        </div>
      </div>
    );
  }
}


// ok yeah this is a bit dumb but we want to be able to use the hooks to get agent
// and to do that we need the provider context set...

const BasicRemoteComponent = (props) => {
  return (
    <RemoteComponentWrapper>
      <BasicRemoteComponentInner {...props}/>
    </RemoteComponentWrapper>
  )
}

export default BasicRemoteComponent;
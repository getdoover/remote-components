import RemoteAccess from 'customer_site/RemoteAccess';
import RemoteComponentWrapper from 'customer_site/RemoteComponentWrapper';
import {CircularProgress, Grid} from '@mui/material';
import {useRemoteParams} from "customer_site/useRemoteParams";
import {useAgent} from "customer_site/hooks";
class BasicRemoteComponentInner extends RemoteAccess {
  constructor(props) {
    super(props);
    this.state = {
      agent: null,
    };

    this.agent = props.agent;

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
const ComponentWithAgent = (props) => {
  const {agentId} = useRemoteParams();
  const {agent} = useAgent(agentId);

  if (!agent) {
    return <CircularProgress/>;
  }

  return (
    <BasicRemoteComponentInner agent={agent} {...props}/>
  );
}

const BasicRemoteComponent = (props) => {
  return (
    <RemoteComponentWrapper>
      <ComponentWithAgent {...props}/>
    </RemoteComponentWrapper>
  )
}

export default BasicRemoteComponent;
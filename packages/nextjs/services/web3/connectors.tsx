import { argent, braavos, InjectedConnector } from "@starknet-react/core";
import { getTargetNetworks } from "~~/utils/scaffold-stark";
import { StarknetFinanceConnector } from "./stark-burner/BurnerConnector";
import scaffoldConfig from "~~/scaffold.config";
import { LAST_CONNECTED_TIME_LOCALSTORAGE_KEY } from "~~/utils/Constants";

const targetNetworks = getTargetNetworks();

export const connectors = getConnectors();

// workaround helper function to properly disconnect with removing local storage (prevent autoconnect infinite loop)
function withDisconnectWrapper(connector: InjectedConnector) {
  const connectorDisconnect = connector.disconnect;
  const _disconnect = (): Promise<void> => {
    localStorage.removeItem("lastUsedConnector");
    localStorage.removeItem(LAST_CONNECTED_TIME_LOCALSTORAGE_KEY);
    return connectorDisconnect();
  };
  connector.disconnect = _disconnect.bind(connector);
  return connector;
}

function getConnectors() {
  const connectors = [argent(), braavos(), new StarknetFinanceConnector()];

  return connectors.sort(() => Math.random() - 0.5).map(withDisconnectWrapper);
}

export const appChains = targetNetworks;

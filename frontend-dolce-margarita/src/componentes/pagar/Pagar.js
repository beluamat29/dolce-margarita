import React from 'react';
import {withRouter} from "react-router-dom";

class Pagar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      preference_id: props.preference_id
    }
  }

  render () {
    return (
      <form action='/procesar-pago' method="POST">
        <script
          src='http://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js'
          data-preference-id={this.state.preference_id}>
        </script>
      </form>
    )
  }
}

export default withRouter(Pagar);

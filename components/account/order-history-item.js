import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function OrderHistoryItem({ id, cancel }) {
  return (
    <div className="card border-0 shadow-sm mb-3">
      <div className="card-header py-3 bg-white">
        <div className="row">
          <div className="col d-flex">
            <span className="fw-semibold h5 my-auto">Id de Pedido: {id}</span>
          </div>
          <div className="col-auto">
            <button className="btn btn-sm btn-outline-primary">
              Ver Detalle
            </button>
          </div>
        </div>
      </div>
      <div className="card-body">
        <div className="row gx-2 gy-3">
          <div className="col-md-5">
            <h6 className="fw-bold">Dirección</h6>
            <div className="vstack text-dark small">
              <span>Calle</span>
              <span>#1234</span>
              <span>Santiago, Región Metropolitana</span>
              <span>Tel: +56912345678</span>
              <span>Email: mail@correo.com</span>
            </div>
          </div>
          <div className="col-md-4">
            <h6 className="fw-bold">Método de Pago</h6>
            <div className="text-success">
              {cancel ? (
                <>
                  <span className="fw-bold">
                    <FontAwesomeIcon
                      icon={["fas", "money-bill-wave"]}
                      size="lg"
                    />
                  </span>
                  <span className="ms-2 small">Efectivo</span>
                </>
              ) : (
                <>
                  <span className="fw-bold">
                    <FontAwesomeIcon icon={["fab", "cc-visa"]} size="lg" />
                  </span>
                  <span className="ms-2 small">XXXX-XXXX-XXXX-2345</span>
                </>
              )}
            </div>
            <div>Subtotal: $100.000</div>
            <div>Costo de envío: $3.000</div>
            <div className="fw-semibold">Total: $103.000</div>
          </div>
          <div className="col-md-3">
            <h6 className="fw-bold">Estado</h6>
            <div className={cancel ? "text-danger" : "text-success"}>
              <span className="fw-semibold">
                {cancel ? "CANCELADO" : "ENVIADO"}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="card-footer small border-0 py-3 text-muted">
        Pedido el día: {new Date().toDateString()}
      </div>
    </div>
  );
}

export default OrderHistoryItem;

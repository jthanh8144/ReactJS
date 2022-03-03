import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import invoices from "../data/invoices";

function Invoice() {
    const { invoiceId } = useParams();
    const navigate = useNavigate();

    const invoice = invoices.find(invoice => invoice.id.toString() === invoiceId);

    useEffect(() => {
        if (!invoice) {
            navigate('..');
        }
    }, [invoice])

    return (
        <h2
            style={{
                padding: '1rem'
            }}
        >
            Invoice #{invoice?.id} for {invoice?.name}
        </h2>
    );
}

export default Invoice;

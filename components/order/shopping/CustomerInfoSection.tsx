interface Props {
  customerName: string;
  phone: string;
  address: string;
  setCustomerName: (v: string) => void;
  setPhone: (v: string) => void;
  setAddress: (v: string) => void;
}

export default function CustomerInfoSection({
  customerName,
  phone,
  address,
  setCustomerName,
  setPhone,
  setAddress,
}: Props) {
  return (
    <>
      <div className="grid md:grid-cols-2 gap-4">
        <input
          className="input"
          placeholder="Full Name *"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
        />

        <input
          className="input"
          placeholder="Phone Number *"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>

      <input
        className="input"
        placeholder="Complete Delivery Address *"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
    </>
  );
}

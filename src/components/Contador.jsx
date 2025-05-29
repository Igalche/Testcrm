import { useState } from 'react';

export default function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <div className="p-4 space-y-2">
      <p className="text-lg">Contador: {contador}</p>
      <button className="btn btn-primary" onClick={() => setContador(contador + 1)}>
        Incrementar usando componente react
      </button>
    </div>
  );
}

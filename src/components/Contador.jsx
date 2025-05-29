import { useStore } from '@nanostores/react';
import { contador, incrementar } from '../stores/contador';

export default function Contador() {
  const valor = useStore(contador); // Se mantiene sincronizado

  return (
    <div className="p-4 space-y-2">
      <p className="text-lg">Contador global: {valor}</p>
      <button className="btn btn-secondary" onClick={incrementar}>
        Incrementar usando componente react + nanostores "misma store"
      </button>
    </div>
  );
}

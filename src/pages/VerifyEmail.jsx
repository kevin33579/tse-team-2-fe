import { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

export default function VerifyEmail() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const token = searchParams.get('token');

  useEffect(() => {
    const verifyEmail = async () => {
      if (!token) {
        // Token tidak ada → redirect ke login dengan status gagal
        navigate('/login?verified=false');
        return;
      }

      try {
        const response = await fetch(`https://localhost:7071/api/auth/verify-email?token=${token}`);
        if (response.ok) {
          // Jika verifikasi sukses → redirect ke login dengan status sukses
          navigate('/login?verified=true');
        } else {
          // Verifikasi gagal (token invalid / expired)
          navigate('/login?verified=false');
        }
      } catch (error) {
        // Error fetch
        console.error('Verification error:', error);
        navigate('/login?verified=false');
      }
    };

    verifyEmail();
  }, [token, navigate]);

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h2>Memverifikasi email Anda...</h2>
      <p>Mohon tunggu sebentar.</p>
    </div>
  );
}

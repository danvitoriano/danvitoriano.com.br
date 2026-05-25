import { Metadata } from 'next';
import { Inter, Roboto } from 'next/font/google';
import styles from './mediakit.module.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const roboto = Roboto({ weight: ['400', '500', '700'], subsets: ['latin'], variable: '--font-roboto' });

export const metadata: Metadata = {
  title: 'Mídia Kit | Dan Vitoriano',
  description: 'Criador de conteúdo de tecnologia, IA, marketing digital e diversidade. Alcance de 97k+ seguidores nas principais plataformas sociais.',
};

export default function MediaKitPage() {
  return (
    <div className={`${inter.variable} ${roboto.variable} ${styles.container}`}>
      <div className={styles.wrapper}>
        {/* Header */}
        <header className={styles.header}>
          <h1 className={styles.name}>Dan Vitoriano</h1>
          <p className={styles.bio}>
            Criador de conteúdo de tecnologia, IA, marketing digital e diversidade. Foco em público tech 40+, mulheres e comunidade LGBTQIA+.
          </p>
          <div className={styles.tags}>
            <span className={styles.tag}>Tecnologia & IA</span>
            <span className={styles.tag}>Marketing Digital</span>
            <span className={styles.tag}>Educação</span>
            <span className={styles.tag}>LGBTQ+</span>
          </div>
          <div className={styles.contacts}>
            <a href="mailto:contato@danvitoriano.com.br" className={styles.contact}>
              contato@danvitoriano.com.br
            </a>
            <a href="https://danvitoriano.com.br" className={styles.contact} target="_blank" rel="noopener noreferrer">
              danvitoriano.com.br
            </a>
          </div>
        </header>

        {/* Banner Total */}
        <section className={styles.banner}>
          <div className={styles.bannerContent}>
            <div className={styles.bannerTotal}>
              <div className={styles.totalNumber}>97k+</div>
              <div className={styles.totalLabel}>Seguidores Totais</div>
            </div>
            <div className={styles.bannerBreakdown}>
              <div className={styles.breakdownItem}>
                <span className={styles.breakdownPlatform}>Instagram</span>
                <span className={styles.breakdownNumber}>32.2k</span>
              </div>
              <div className={styles.breakdownItem}>
                <span className={styles.breakdownPlatform}>LinkedIn</span>
                <span className={styles.breakdownNumber}>33k</span>
              </div>
              <div className={styles.breakdownItem}>
                <span className={styles.breakdownPlatform}>TikTok</span>
                <span className={styles.breakdownNumber}>18.9k</span>
              </div>
              <div className={styles.breakdownItem}>
                <span className={styles.breakdownPlatform}>Threads</span>
                <span className={styles.breakdownNumber}>8.4k</span>
              </div>
              <div className={styles.breakdownItem}>
                <span className={styles.breakdownPlatform}>YouTube</span>
                <span className={styles.breakdownNumber}>4.4k</span>
              </div>
            </div>
          </div>
        </section>

        {/* Social Media Cards */}
        <section className={styles.socialSection}>
          <h2 className={styles.sectionTitle}>Alcance nas Redes Sociais</h2>
          
          <div className={styles.grid}>
            {/* Instagram */}
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>Instagram</h3>
                <p className={styles.cardHandle}>@danvitoriano</p>
              </div>
              <div className={styles.cardStats}>
                <div className={styles.statItem}>
                  <div className={styles.statValue}>32.2k</div>
                  <div className={styles.statLabel}>Seguidores</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statValue}>6.1%</div>
                  <div className={styles.statLabel}>Engajamento</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statValue}>295.3k</div>
                  <div className={styles.statLabel}>Média Views Reels</div>
                </div>
              </div>
              <div className={styles.highlight}>
                <strong>Top 1%</strong> em engajamento
              </div>
              <div className={styles.cardMetrics}>
                <div className={styles.metricRow}>
                  <span>Alcance 30 dias</span>
                  <span className={styles.metricValue}>3.3M</span>
                </div>
                <div className={styles.metricRow}>
                  <span>Impressões</span>
                  <span className={styles.metricValue}>5.3M</span>
                </div>
                <div className={styles.metricRow}>
                  <span>Engajamentos</span>
                  <span className={styles.metricValue}>526.9k</span>
                </div>
                <div className={styles.metricRow}>
                  <span>Média de Likes</span>
                  <span className={styles.metricValue}>17k</span>
                </div>
              </div>
              <div className={styles.demographics}>
                <div className={styles.demoTitle}>Demografia</div>
                <div className={styles.demoItem}>56.1% feminino</div>
                <div className={styles.demoItem}>25-34 anos (faixa principal)</div>
                <div className={styles.demoItem}>Brasil 93.6%</div>
              </div>
            </div>

            {/* LinkedIn */}
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>LinkedIn</h3>
                <p className={styles.cardHandle}>Dan Vitoriano</p>
              </div>
              <div className={styles.cardStats}>
                <div className={styles.statItem}>
                  <div className={styles.statValue}>33k</div>
                  <div className={styles.statLabel}>Seguidores</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statValue}>1.23M</div>
                  <div className={styles.statLabel}>Impressões/ano</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statValue}>452.8k</div>
                  <div className={styles.statLabel}>Membros Alcançados</div>
                </div>
              </div>
              <div className={styles.highlight}>
                <strong>14.475</strong> assinantes newsletter
              </div>
              <div className={styles.cardMetrics}>
                <div className={styles.metricRow}>
                  <span>Views Artigos/ano</span>
                  <span className={styles.metricValue}>30k</span>
                </div>
                <div className={styles.metricRow}>
                  <span>Newsletter Principal</span>
                  <span className={styles.metricValue}>Fora da Bolha</span>
                </div>
                <div className={styles.metricRow}>
                  <span>Crescimento Newsletter</span>
                  <span className={styles.metricValue}>+25.7%</span>
                </div>
              </div>
              <div className={styles.demographics}>
                <div className={styles.demoTitle}>Demografia</div>
                <div className={styles.demoItem}>Público profissional tech</div>
                <div className={styles.demoItem}>Decisores e influenciadores</div>
                <div className={styles.demoItem}>Brasil e América Latina</div>
              </div>
            </div>

            {/* TikTok */}
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>TikTok</h3>
                <p className={styles.cardHandle}>@danvitoriano</p>
              </div>
              <div className={styles.cardStats}>
                <div className={styles.statItem}>
                  <div className={styles.statValue}>18.9k</div>
                  <div className={styles.statLabel}>Seguidores</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statValue}>4.5%</div>
                  <div className={styles.statLabel}>Engajamento</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statValue}>681</div>
                  <div className={styles.statLabel}>Vídeos</div>
                </div>
              </div>
              <div className={styles.cardMetrics}>
                <div className={styles.metricRow}>
                  <span>Média de Views</span>
                  <span className={styles.metricValue}>1.3k</span>
                </div>
                <div className={styles.metricRow}>
                  <span>Média de Likes</span>
                  <span className={styles.metricValue}>90</span>
                </div>
              </div>
              <div className={styles.demographics}>
                <div className={styles.demoTitle}>Demografia</div>
                <div className={styles.demoItem}>55% masculino</div>
                <div className={styles.demoItem}>18-24 anos (faixa principal)</div>
                <div className={styles.demoItem}>Brasil 81.7%</div>
              </div>
            </div>

            {/* Threads */}
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>Threads</h3>
                <p className={styles.cardHandle}>@danvitoriano</p>
              </div>
              <div className={styles.cardStats}>
                <div className={styles.statItem}>
                  <div className={styles.statValue}>8.4k</div>
                  <div className={styles.statLabel}>Seguidores</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statValue}>1.8%</div>
                  <div className={styles.statLabel}>Engajamento</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statValue}>16.4k</div>
                  <div className={styles.statLabel}>Impressões</div>
                </div>
              </div>
              <div className={styles.cardMetrics}>
                <div className={styles.metricRow}>
                  <span>Média de Views</span>
                  <span className={styles.metricValue}>821</span>
                </div>
                <div className={styles.metricRow}>
                  <span>Média de Likes</span>
                  <span className={styles.metricValue}>8</span>
                </div>
              </div>
              <div className={styles.demographics}>
                <div className={styles.demoTitle}>Demografia</div>
                <div className={styles.demoItem}>66.5% masculino</div>
                <div className={styles.demoItem}>35-44 anos (faixa principal)</div>
                <div className={styles.demoItem}>Brasil 96.6%</div>
              </div>
            </div>

            {/* YouTube */}
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>YouTube</h3>
                <p className={styles.cardHandle}>@danvitoriano</p>
              </div>
              <div className={styles.cardStats}>
                <div className={styles.statItem}>
                  <div className={styles.statValue}>4.4k</div>
                  <div className={styles.statLabel}>Inscritos</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statValue}>9.1%</div>
                  <div className={styles.statLabel}>Content Engagement</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statValue}>546</div>
                  <div className={styles.statLabel}>Vídeos</div>
                </div>
              </div>
              <div className={styles.demographics}>
                <div className={styles.demoTitle}>Demografia</div>
                <div className={styles.demoItem}>62.5% masculino</div>
                <div className={styles.demoItem}>35-44 anos (faixa principal)</div>
                <div className={styles.demoItem}>Brasil 80.9%</div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Table */}
        <section className={styles.pricingSection}>
          <h2 className={styles.sectionTitle}>Tabela de Investimentos</h2>
          <div className={styles.pricingGrid}>
            <div className={styles.priceItem}>
              <div className={styles.priceService}>Reels Instagram</div>
              <div className={styles.priceValue}>R$ 4.000</div>
            </div>
            <div className={styles.priceItem}>
              <div className={styles.priceService}>Sequência Stories (3x)</div>
              <div className={styles.priceValue}>R$ 1.000</div>
            </div>
            <div className={styles.priceItem}>
              <div className={styles.priceService}>Pacote Reels + Stories</div>
              <div className={styles.priceValue}>R$ 4.500</div>
            </div>
            <div className={styles.priceItem}>
              <div className={styles.priceService}>TikTok Vídeo</div>
              <div className={styles.priceValue}>R$ 2.000</div>
            </div>
            <div className={styles.priceItem}>
              <div className={styles.priceService}>YouTube Short</div>
              <div className={styles.priceValue}>R$ 1.500</div>
            </div>
            <div className={styles.priceItem}>
              <div className={styles.priceService}>YouTube Inserção Patrocinada</div>
              <div className={styles.priceValue}>R$ 1.500</div>
            </div>
            <div className={styles.priceItem}>
              <div className={styles.priceService}>Newsletter LinkedIn</div>
              <div className={styles.priceValue}>R$ 1.500</div>
            </div>
            <div className={styles.priceItem}>
              <div className={styles.priceService}>Pacote Newsletter + Reels</div>
              <div className={styles.priceValue}>R$ 5.000</div>
            </div>
            <div className={styles.priceItem}>
              <div className={styles.priceService}>Cobertura Presencial</div>
              <div className={styles.priceValue}>Consultar</div>
            </div>
            <div className={styles.priceItem}>
              <div className={styles.priceService}>Pacote Mensal</div>
              <div className={styles.priceValue}>Consultar</div>
            </div>
          </div>
          <div className={styles.priceNote}>
            <p><strong>Nota:</strong> Pagamento via boleto ou PIX com nota fiscal pela FULLCIRCLE SERVIÇOS DE INFORMÁTICA LTDA.</p>
            <p>Valores com validade de 30 dias.</p>
          </div>
        </section>

        {/* Brands */}
        <section className={styles.brandsSection}>
          <h2 className={styles.sectionTitle}>Marcas Parceiras</h2>
          <div className={styles.brandsList}>
            <span className={styles.brandTag}>Mercado Livre</span>
            <span className={styles.brandTag}>L&apos;Oreal</span>
            <span className={styles.brandTag}>Garnier</span>
            <span className={styles.brandTag}>Descomplica</span>
            <span className={styles.brandTag}>EBAC</span>
            <span className={styles.brandTag}>Alura</span>
            <span className={styles.brandTag}>Twilio</span>
            <span className={styles.brandTag}>Insider</span>
            <span className={styles.brandTag}>TCL</span>
            <span className={styles.brandTag}>Locaweb</span>
            <span className={styles.brandTag}>Woovi</span>
            <span className={styles.brandTag}>ActiveCampaign</span>
            <span className={styles.brandTag}>Leapmotor</span>
            <span className={styles.brandTag}>Reply</span>
            <span className={styles.brandTag}>Cielo</span>
            <span className={styles.brandTag}>FIAP</span>
            <span className={styles.brandTag}>The Developer&apos;s Conference</span>
          </div>
        </section>

        {/* Niches */}
        <section className={styles.nichesSection}>
          <h2 className={styles.sectionTitle}>Nichos de Conteúdo</h2>
          <div className={styles.nichesList}>
            <div className={styles.nicheCard}>
              <h3 className={styles.nicheTitle}>Tecnologia & IA</h3>
              <p className={styles.nicheDesc}>Análises, tendências e insights sobre inteligência artificial e tecnologia.</p>
            </div>
            <div className={styles.nicheCard}>
              <h3 className={styles.nicheTitle}>Social Media & Marketing Digital</h3>
              <p className={styles.nicheDesc}>Estratégias, ferramentas e práticas de marketing digital e redes sociais.</p>
            </div>
            <div className={styles.nicheCard}>
              <h3 className={styles.nicheTitle}>Educação em Tech</h3>
              <p className={styles.nicheDesc}>Conteúdo educacional sobre tecnologia, programação e carreira tech.</p>
            </div>
            <div className={styles.nicheCard}>
              <h3 className={styles.nicheTitle}>Diversidade LGBTQIA+</h3>
              <p className={styles.nicheDesc}>Representatividade, inclusão e diversidade no mercado de tecnologia.</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className={styles.footer}>
          <p className={styles.footerUpdate}>Última atualização: maio 2026</p>
          <div className={styles.footerLinks}>
            <a href="mailto:contato@danvitoriano.com.br" className={styles.footerLink}>
              contato@danvitoriano.com.br
            </a>
            <a href="https://danvitoriano.com.br" className={styles.footerLink} target="_blank" rel="noopener noreferrer">
              danvitoriano.com.br
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

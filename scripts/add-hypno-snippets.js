/**
 * Ajoute les extraits de code du projet Site Hypnotisation (projectId 10) dans portfolio.js.
 * Lancer depuis portfolio-dev : node Site-Portfolio-All-in-Frontend/scripts/add-hypno-snippets.js
 */
import { readFileSync, writeFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const portfolioPath = join(__dirname, '..', 'src', 'data', 'portfolio.js')

const hypnoSnippets = [
  {
    id: 1001,
    projectId: 10,
    section: 'Backend Spring Boot',
    title: 'Application principale : Spring Boot 3, JPA Auditing',
    slug: 'hypno-application',
    language: 'java',
    description: 'Point d\'entrée du backend : @SpringBootApplication, @EnableJpaAuditing pour les champs createdAt/updatedAt sur les entités JPA.',
    code: `package com.therapie;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class TherapieAppApplication {

    public static void main(String[] args) {
        SpringApplication.run(TherapieAppApplication.class, args);
    }
}`,
    sortOrder: 1
  },
  {
    id: 1002,
    projectId: 10,
    section: 'Sécurité Java',
    title: 'Configuration Spring Security : JWT, CORS, rôles',
    slug: 'hypno-security-config',
    language: 'java',
    description: 'SecurityFilterChain : désactivation CSRF, session stateless, routes /api/auth/** et /api/public/** en permitAll, /api/admin/** réservé ADMIN, filtre JWT.',
    code: `@Bean
public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    http
        .csrf(csrf -> csrf.disable())
        .cors(cors -> cors.configurationSource(corsConfigurationSource()))
        .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
        .authorizeHttpRequests(auth -> auth
            .requestMatchers("/api/auth/**", "/api/public/**").permitAll()
            .requestMatchers("/api/admin/**").hasRole("ADMIN")
            .anyRequest().authenticated()
        )
        .addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);
    return http.build();
}`,
    sortOrder: 2
  },
  {
    id: 1003,
    projectId: 10,
    section: 'Authentification JWT',
    title: 'AuthController : inscription et login avec JWT',
    slug: 'hypno-auth-controller',
    language: 'java',
    description: 'REST /api/auth : register (validation @Valid, encodage mot de passe BCrypt, génération token JWT), login (authentification puis token).',
    code: `@PostMapping("/register")
public ResponseEntity<?> register(@Valid @RequestBody RegisterRequest request) {
    if (userRepository.existsByEmail(request.getEmail())) {
        return ResponseEntity.badRequest().body("Email already exists");
    }
    User user = new User();
    user.setEmail(request.getEmail());
    user.setPassword(passwordEncoder.encode(request.getPassword()));
    user.setFirstName(request.getFirstName());
    user.setLastName(request.getLastName());
    user.setLanguage(request.getLanguage() != null ? request.getLanguage() : User.Language.FR);
    userRepository.save(user);
    Authentication authentication = authenticationManager.authenticate(
        new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
    String token = tokenProvider.generateToken(authentication);
    return ResponseEntity.ok(new AuthResponse(token, "User registered successfully"));
}

@PostMapping("/login")
public ResponseEntity<?> login(@Valid @RequestBody LoginRequest request) {
    Authentication authentication = authenticationManager.authenticate(
        new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
    String token = tokenProvider.generateToken(authentication);
    return ResponseEntity.ok(new AuthResponse(token, "Login successful"));
}`,
    sortOrder: 3
  },
  {
    id: 1004,
    projectId: 10,
    section: 'Sécurité Java',
    title: 'JwtTokenProvider : génération et validation des tokens',
    slug: 'hypno-jwt-provider',
    language: 'java',
    description: 'Génération de token JWT (subject = email, expiration configurable), parsing et validation avec clé HMAC (app.jwt.secret).',
    code: `public String generateToken(Authentication authentication) {
    String email = authentication.getName();
    Date now = new Date();
    Date expiryDate = new Date(now.getTime() + jwtExpiration);
    return Jwts.builder()
        .subject(email)
        .issuedAt(now)
        .expiration(expiryDate)
        .signWith(getSigningKey())
        .compact();
}

public String getEmailFromToken(String token) {
    Claims claims = Jwts.parser()
        .verifyWith(getSigningKey())
        .build()
        .parseSignedClaims(token)
        .getPayload();
    return claims.getSubject();
}

public boolean validateToken(String token) {
    try {
        Jwts.parser().verifyWith(getSigningKey()).build().parseSignedClaims(token);
        return true;
    } catch (JwtException | IllegalArgumentException e) {
        return false;
    }
}`,
    sortOrder: 4
  },
  {
    id: 1005,
    projectId: 10,
    section: 'API REST Java',
    title: 'AppointmentController : CRUD rendez-vous sécurisé',
    slug: 'hypno-appointment-controller',
    language: 'java',
    description: 'REST /api/appointments : GET (liste de l\'utilisateur), POST (création avec Authentication), GET /{id}, PUT /{id}/cancel. Utilisateur récupéré via JWT.',
    code: `@GetMapping
public ResponseEntity<?> getUserAppointments(Authentication authentication) {
    String email = authentication.getName();
    User user = userRepository.findByEmail(email).orElseThrow(() -> new RuntimeException("User not found"));
    List<Appointment> appointments = appointmentService.getUserAppointments(user.getId());
    return ResponseEntity.ok(appointments);
}

@PostMapping
public ResponseEntity<?> createAppointment(@Valid @RequestBody AppointmentRequest request, Authentication authentication) {
    String email = authentication.getName();
    User user = userRepository.findByEmail(email).orElseThrow(() -> new RuntimeException("User not found"));
    Appointment appointment = appointmentService.createAppointment(user.getId(), request.getServiceType(), request.getScheduledAt(), request.getPrice());
    return ResponseEntity.ok(appointment);
}`,
    sortOrder: 5
  },
  {
    id: 1006,
    projectId: 10,
    section: 'Paiement Stripe',
    title: 'StripeController : PaymentIntent et abonnements',
    slug: 'hypno-stripe-controller',
    language: 'java',
    description: 'Endpoints /api/stripe : create-payment-intent (paiement unique), create-subscription (abonnement Stripe). Gestion StripeException et réponses HTTP structurées.',
    code: `@PostMapping("/create-payment-intent")
public ResponseEntity<?> createPaymentIntent(@RequestBody PaymentRequest request) {
    try {
        Map<String, Object> response = stripeService.createPaymentIntent(
            request.getAmount(),
            request.getCurrency() != null ? request.getCurrency() : "eur",
            request.getDescription()
        );
        return ResponseEntity.ok(response);
    } catch (StripeException e) {
        Map<String, String> error = new HashMap<>();
        error.put("error", e.getMessage());
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(error);
    }
}

@PostMapping("/create-subscription")
public ResponseEntity<?> createSubscription(@RequestBody SubscriptionRequest request) {
    try {
        Subscription subscription = stripeService.createSubscription(request.getCustomerId(), request.getPriceId());
        Map<String, Object> response = new HashMap<>();
        response.put("subscriptionId", subscription.getId());
        response.put("clientSecret", subscription.getLatestInvoiceObject().getPaymentIntent().getClientSecret());
        return ResponseEntity.ok(response);
    } catch (StripeException e) {
        Map<String, String> error = new HashMap<>();
        error.put("error", e.getMessage());
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(error);
    }
}`,
    sortOrder: 6
  },
  {
    id: 1007,
    projectId: 10,
    section: 'Modèle JPA',
    title: 'Entité Appointment : JPA, enums, audit',
    slug: 'hypno-model-appointment',
    language: 'java',
    description: 'Entité JPA rendez-vous : relation ManyToOne User, ServiceType (CONSULTATION, HYPNOSIS, COACHING), statuts (PENDING, CONFIRMED…), Stripe paymentIntentId, @CreatedDate / @LastModifiedDate.',
    code: `@Entity
@Table(name = "appointments")
@Data
@NoArgsConstructor
@AllArgsConstructor
@EntityListeners(AuditingEntityListener.class)
public class Appointment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;
    @Enumerated(EnumType.STRING)
    private ServiceType serviceType;
    private LocalDateTime scheduledAt;
    @Enumerated(EnumType.STRING)
    private AppointmentStatus status = AppointmentStatus.PENDING;
    private String videoLink;
    private Double price;
    @Enumerated(EnumType.STRING)
    private PaymentStatus paymentStatus = PaymentStatus.PENDING;
    private String paymentIntentId; // Stripe
    @CreatedDate
    @Column(nullable = false, updatable = false)
    private LocalDateTime createdAt;
    @LastModifiedDate
    private LocalDateTime updatedAt;

    public enum ServiceType { CONSULTATION, HYPNOSIS, COACHING, FOLLOW_UP }
    public enum AppointmentStatus { PENDING, CONFIRMED, COMPLETED, CANCELLED }
    public enum PaymentStatus { PENDING, PAID, FAILED, REFUNDED }
}`,
    sortOrder: 7
  },
  {
    id: 1008,
    projectId: 10,
    section: 'Gestion des erreurs',
    title: 'GlobalExceptionHandler : validation et erreurs métier',
    slug: 'hypno-exception-handler',
    language: 'java',
    description: '@RestControllerAdvice : MethodArgumentNotValidException (champs en erreur), BadCredentialsException (401), RuntimeException et Exception générique. Réponses JSON structurées.',
    code: `@ExceptionHandler(MethodArgumentNotValidException.class)
public ResponseEntity<Map<String, Object>> handleValidationExceptions(MethodArgumentNotValidException ex) {
    Map<String, String> errors = new HashMap<>();
    ex.getBindingResult().getAllErrors().forEach((error) -> {
        String fieldName = ((FieldError) error).getField();
        String errorMessage = error.getDefaultMessage();
        errors.put(fieldName, errorMessage);
    });
    Map<String, Object> response = new HashMap<>();
    response.put("error", "Validation failed");
    response.put("errors", errors);
    response.put("status", HttpStatus.BAD_REQUEST.value());
    return ResponseEntity.badRequest().body(response);
}

@ExceptionHandler(BadCredentialsException.class)
public ResponseEntity<Map<String, Object>> handleBadCredentials(BadCredentialsException ex) {
    Map<String, Object> response = new HashMap<>();
    response.put("error", "Invalid email or password");
    response.put("status", HttpStatus.UNAUTHORIZED.value());
    return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);
}`,
    sortOrder: 8
  },
  {
    id: 1009,
    projectId: 10,
    section: 'Frontend React',
    title: 'Client API : axios, intercepteur JWT, modules par ressource',
    slug: 'hypno-frontend-api',
    language: 'javascript',
    description: 'Client axios avec baseURL, intercepteur request (Bearer token depuis authStore), intercepteur response (401 → logout + redirect login). APIs auth, user, appointments, content, stripe, etc.',
    code: `const api = axios.create({
  baseURL: API_URL,
  headers: { 'Content-Type': 'application/json' },
});

api.interceptors.request.use(
  (config) => {
    const token = useAuthStore.getState().token;
    if (token) config.headers.Authorization = \`Bearer \${token}\`;
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      useAuthStore.getState().logout();
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export const authAPI = {
  login: (data) => api.post('/auth/login', data),
  register: (data) => api.post('/auth/register', data),
};
export const appointmentsAPI = {
  getAll: () => api.get('/appointments'),
  create: (data) => api.post('/appointments', data),
  cancel: (id) => api.put(\`/appointments/\${id}/cancel\`),
};`,
    sortOrder: 9
  },
  {
    id: 1010,
    projectId: 10,
    section: 'Frontend React',
    title: 'Vite : proxy API vers le backend Spring Boot',
    slug: 'hypno-vite-config',
    language: 'javascript',
    description: 'Configuration Vite avec plugin React et proxy /api vers localhost:8080 pour éviter les problèmes CORS en développement.',
    code: `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
      },
    },
  },
})`,
    sortOrder: 10
  }
]

let content = readFileSync(portfolioPath, 'utf8')

// Si le fichier a déjà des snippets (tableau non vide), on ajoute les Hypno avant le ] final
const hasExistingSnippets = content.includes('"projectId": 8') && content.includes('ploufplouf-equipes')
if (hasExistingSnippets) {
  const insertPoint = content.lastIndexOf('\n]')
  if (insertPoint > 0) {
    const before = content.slice(0, insertPoint)
    const after = content.slice(insertPoint)
    const newBlock = ',\n  ' + hypnoSnippets.map(s => JSON.stringify(s)).join(',\n  ') + '\n'
    content = before + newBlock + after
  }
} else {
  const head = content.replace(/\n\/\*\* Liste des extraits[\s\S]*?export const snippets = \[\][\s\S]*$/, '')
  content = head + '\n/** Extraits Site Hypnotisation (backend Java Spring Boot + frontend React) */\nexport const snippets = ' + JSON.stringify(hypnoSnippets, null, 2) + '\n'
}

writeFileSync(portfolioPath, content, 'utf8')
console.log('OK: ajout de', hypnoSnippets.length, 'snippets Site Hypnotisation (projectId 10)')
process.exit(0)

package com.cafe.config;
import org.springframework.stereotype.Component;
import java.security.SecureRandom;
import java.util.Base64;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;
@Component
public class AdminTokenService {
 private final Set<String> tokens=ConcurrentHashMap.newKeySet();
 private final SecureRandom random=new SecureRandom();
 public String create(){byte[] b=new byte[32];random.nextBytes(b);String token=Base64.getUrlEncoder().withoutPadding().encodeToString(b);tokens.add(token);return token;}
 public boolean valid(String token){return token!=null&&tokens.contains(token);}
 public void revoke(String token){if(token!=null)tokens.remove(token);}
}

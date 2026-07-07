package com.aiindustrial.backend.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;

   @NotBlank(message = "Full Name is required")
@Column(nullable = false)
private String fullName;

    @NotBlank(message = "Email is required")
@Email(message = "Enter a valid email")
@Column(nullable = false, unique = true)
private String email;

   @NotBlank(message = "Password is required")
@Size(min = 6, message = "Password must contain at least 6 characters")
@Column(nullable = false)
private String password;

   @NotBlank(message = "Role is required")
@Column(nullable = false)
private String role;

    public User() {
    }

    public User(Long userId, String fullName, String email, String password, String role) {
        this.userId = userId;
        this.fullName = fullName;
        this.email = email;
        this.password = password;
        this.role = role;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }
}
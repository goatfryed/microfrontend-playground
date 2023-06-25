package de.github.playground.microfrontend.containerbackend;

import org.springframework.core.annotation.Order;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.DispatcherHandler;
import org.springframework.web.reactive.function.server.RequestPredicate;
import org.springframework.web.reactive.function.server.RequestPredicates;
import org.springframework.web.reactive.function.server.ServerRequest;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.server.ServerWebExchange;
import org.springframework.web.server.WebExceptionHandler;
import reactor.core.publisher.Mono;

import java.util.Collections;

@Component
@Order(-2)
public class HtmlRequestNotFoundHandler implements WebExceptionHandler {

    private final DispatcherHandler dispatcherHandler;

    private final RequestPredicate PREDICATE = RequestPredicates.accept(MediaType.TEXT_HTML);

    public HtmlRequestNotFoundHandler(DispatcherHandler dispatcherHandler) {
        this.dispatcherHandler = dispatcherHandler;
    }

    @Override
    public Mono<Void> handle(ServerWebExchange exchange, Throwable throwable) {
        if (
            isNotFoundAndShouldBeForwarded(exchange, throwable)
        ) {
            var forwardRequest = exchange.mutate().request(it -> it.path("/index.html"));
            return dispatcherHandler.handle(forwardRequest.build());
        }
        return Mono.error(throwable);
    }

    private boolean isNotFoundAndShouldBeForwarded(ServerWebExchange exchange, Throwable throwable) {
        if (throwable instanceof ResponseStatusException
            && ((ResponseStatusException) throwable).getStatusCode() == HttpStatus.NOT_FOUND
        ) {

            var serverRequest = ServerRequest.create(exchange, Collections.emptyList());
            return PREDICATE.test(serverRequest);
        }

        return false;
    }

}
